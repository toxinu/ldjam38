import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';

class Whereami implements Action {
    name: string = 'whereami';

    execute(state: Play, output: Output) {
        const location = state.currentLocation;
        if (location) {
            output.writeToTerminal(location.description);
            return;
        }
        output.writeToTerminal('I\'m nowhere...');
    }
}

export function WhereamiActionFactory(parameters: string[]) {
    return new Whereami();
}
