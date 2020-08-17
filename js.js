ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.delivery_time_select = {
        'title': 'Select Delivery Date',
        'required': true,
        'type': 'datetime',
        'checkoutDisplaySection': 'shipping_methods',
        'orderDetailsDisplaySection': 'order_comments',
        // Default date picker presets
        'datePickerOptions': {
            'startDate' : new Date(new Date().getDate() + 2),
            //'minDate': new Date(new Date().getDate()), // Order is prepared for 2 days minimum. Hiding 2 days from the current date. Default is 0
            'minDate': startDate,
            'maxDate': new Date(2020, 12, 31),
            'showTime': false,
            'incrementMinuteBy': 30,
            // limit available hours for each week day
            
        }
    };
    
ec.order.extraFields.delivery_time = {
    'title': 'Select Delivery Time',
    'type': ‘datetime',
    'required': true,
  
    'checkoutDisplaySection': 'shipping_methods',
    'orderDetailsDisplaySection': 'order_comments',
};

Ecwid.refreshConfig();
