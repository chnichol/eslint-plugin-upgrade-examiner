module.exports = {
    rules: {
        "no-template-literals": {
            create: function(context) {
                return {
                    TemplateLiteral(node) {
                        context.report(node, 'Do not use template literals');
                    }
                };
            }
        }
    }
};