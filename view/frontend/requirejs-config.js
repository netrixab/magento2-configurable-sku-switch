/**
 * Created by thomas on 2017-01-30.
 */

var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'Netrix_ConfigurableSkuSwitch/js/model/skuswitch': true
            },
			'Magento_Swatches/js/swatch-renderer': {
                'Netrix_ConfigurableSkuSwitch/js/model/swatch-skuswitch': true
            }
        }
    }
};