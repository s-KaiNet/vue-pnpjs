import { PnPVueParam } from '../types/index';

declare var define: any;

(() => {
    function plugin(Vue: any, pnp: PnPVueParam): void {
        Vue.prototype.$pnp = Vue.$pnp = pnp;
    }

    if (typeof exports === 'object') {
        module.exports = plugin;
    } else if (typeof define === 'function' && define.amd) {
        define([], function () { return plugin; });
    }
})();
