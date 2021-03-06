import * as path from 'path';
import * as fs from 'fs-extra';
import * as yaml from 'yaml';
import R2Error from '../../model/errors/R2Error';
import YamlParseError from '../../model/errors/Yaml/YamlParseError';
import FileWriteError from '../../model/errors/FileWriteError';
import YamlConvertError from '../../model/errors/Yaml/YamlConvertError';
import PathResolver from './PathResolver';
import { SortNaming } from '../../model/real_enums/sort/SortNaming';
import EnumResolver from '../../model/enums/_EnumResolver';
import { SortDirection } from '../../model/real_enums/sort/SortDirection';
import { SortLocalDisabledMods } from '../../model/real_enums/sort/SortLocalDisabledMods';

let configPath = '';
let configFile = '';

export default class ManagerSettings {

    private static LOADED_SETTINGS: ManagerSettings | undefined;

    public static getSingleton(): ManagerSettings {
        if (this.LOADED_SETTINGS === undefined) {
            this.LOADED_SETTINGS = new ManagerSettings();
            this.LOADED_SETTINGS.load();
        }
        return this.LOADED_SETTINGS;
    }

    public riskOfRain2Directory: string | null = null;
    public steamDirectory: string | null = null;
    public lastSelectedProfile: string = 'Default';
    public funkyModeEnabled: boolean = false;
    public expandedCards: boolean = false;
    public linkedFiles: string[] = [];
    public darkTheme: boolean = false;
    public launchParameters: string = '';
    public ignoreCache: boolean = false;
    public dataDirectory: string = '';
    public installedSortBy: string = EnumResolver.from(SortNaming, SortNaming.CUSTOM)!;
    public installedSortDirection: string = EnumResolver.from(SortDirection, SortDirection.STANDARD)!;
    public installedDisablePosition: string = EnumResolver.from(SortLocalDisabledMods, SortLocalDisabledMods.CUSTOM)!;

    public load(): R2Error | void {
        configPath = path.join(PathResolver.APPDATA_DIR, 'config');
        configFile = path.join(configPath, 'conf.yml');
        fs.ensureDirSync(configPath);
        if (fs.existsSync(configFile)) {
            try {
                const parsedYaml = yaml.parse(fs.readFileSync(configFile).toString());
                this.riskOfRain2Directory = parsedYaml.riskOfRain2Directory;
                this.linkedFiles = parsedYaml.linkedFiles || [];
                this.lastSelectedProfile = parsedYaml.lastSelectedProfile;
                this.steamDirectory = parsedYaml.steamDirectory;
                this.expandedCards = parsedYaml.expandedCards || false;
                this.darkTheme = parsedYaml.darkTheme;
                this.launchParameters = parsedYaml.launchParameters || '';
                this.ignoreCache = parsedYaml.ignoreCache || false;
                this.dataDirectory = parsedYaml.dataDirectory || PathResolver.APPDATA_DIR;
                this.installedSortBy = parsedYaml.installedSortBy || this.installedSortBy;
                this.installedSortDirection = parsedYaml.installedSortDirection || this.installedSortDirection;
                this.installedDisablePosition = parsedYaml.installedDisablePosition || this.installedDisablePosition;
            } catch(e) {
                const err: Error = e;
                return new YamlParseError(
                    'Failed to parse conf.yml',
                    err.message,
                    'Did you modify the conf.yml file? If not, delete it, and re-launch the manager'
                );
            }
        } else {
            this.save();
        }
    }

    public setRiskOfRain2Directory(dir: string): R2Error | void {
        this.riskOfRain2Directory = dir;
        return this.save();
    }

    public setSteamDirectory(dir: string): R2Error | void {
        this.steamDirectory = dir;
        return this.save();
    }

    public setLinkedFiles(linkedFiles: string[]): R2Error | void {
        this.linkedFiles = linkedFiles;
        return this.save();
    }

    private save(): R2Error | void {
        try {
            const writeableYaml = yaml.stringify(this);
            try {
                fs.writeFileSync(configFile, writeableYaml);
            } catch(e) {
                const err: Error = e;
                return new FileWriteError(
                    'Failed to write conf.yml',
                    err.message,
                    'Try running r2modman as an administrator'
                )
            }
        } catch(e) {
            const err: Error = e;
            return new YamlConvertError(
                'Failed to write convert yaml',
                err.message,
                null
            )
        }
    }

    public setProfile(profile: string): R2Error | void {
        this.lastSelectedProfile = profile;
        return this.save();
    }

    public setFunkyMode(enabled: boolean): R2Error | void {
        this.funkyModeEnabled = enabled;
        return this.save();
    }

    public expandCards(): R2Error | void {
        this.expandedCards = true;
        return this.save();
    }

    public collapseCards(): R2Error | void {
        this.expandedCards = false;
        return this.save();
    }

    public toggleDarkTheme(): R2Error | void {
        this.darkTheme = !this.darkTheme;
        return this.save();
    }

    public setLaunchParameters(launchParams: string): R2Error | void {
        this.launchParameters = launchParams;
        return this.save();
    }

    public setIgnoreCache(ignore: boolean): R2Error | void {
        this.ignoreCache = ignore;
        return this.save();
    }

    public setDataDirectory(dataDirectory: string): R2Error | void {
        this.dataDirectory = dataDirectory;
        return this.save();
    }

    public getInstalledSortBy() {
        return Object.entries(SortNaming).filter(value => value[0] === this.installedSortBy)[0][1];
    }

    public setInstalledSortBy(sortNaming: string): R2Error | void {
        this.installedSortBy = EnumResolver.from(SortNaming, sortNaming)!;
        return this.save();
    }

    public getInstalledSortDirection() {
        return Object.entries(SortDirection).filter(value => value[0] === this.installedSortDirection)[0][1];
    }

    public setInstalledSortDirection(sortDirection: string): R2Error | void {
        this.installedSortDirection = EnumResolver.from(SortDirection, sortDirection)!;
        return this.save();
    }

    public getInstalledDisablePosition() {
        return Object.entries(SortLocalDisabledMods).filter(value => value[0] === this.installedDisablePosition)[0][1];
    }

    public setInstalledDisablePosition(disablePosition: string): R2Error | void {
        this.installedDisablePosition = EnumResolver.from(SortLocalDisabledMods, disablePosition)!;
        return this.save();
    }
}
