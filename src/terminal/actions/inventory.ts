import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Inventory implements Action {
    name: string;

    constructor() {
        this.name = 'inventory';
    }

    execute(state: Play, output: Output) {

        let timeout = 200;
        const modules: string[] = ['communication', 'energy', 'refinery', 'extractor'];
        let indModule = 0;
        let installedModule = null;
        for (let module of modules) {
            indModule++;
            installedModule = state.installedModules.find((installed) => installed.name === module);
            if (installedModule) {
                setTimeout(function(){ output.writeToTerminal(module + ' (0 module)'); }, timeout*indModule);
            } else {
                setTimeout(function(){ output.writeToTerminal(module + ' (1 module)'); }, timeout*indModule);
            }
        }
    }
}

export function InventoryActionFactory(parameters: string[]) {
    return new Inventory();
}
