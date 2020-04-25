import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let ReversePipePipe = class ReversePipePipe {
    transform(value) {
        return value.slice().reverse();
    }
};
ReversePipePipe = tslib_1.__decorate([
    Pipe({
        name: 'reverse'
    })
], ReversePipePipe);
export { ReversePipePipe };
//# sourceMappingURL=reverse-pipe.pipe.js.map