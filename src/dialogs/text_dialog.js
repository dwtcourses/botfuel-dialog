const Dialog = require('./dialog');

/**
 * TextDialog class.
 */
class TextDialog extends Dialog {
  /**
   * Constructor.
   */
  constructor(config, brain, parameters) {
    super(config, brain, parameters);
    this.maxComplexity = 1;
  }

  /**
   * Executes.
   * @param {string} id the user id
   */
  async execute(id, responses, messageEntities) {
    console.log('TextDialog.execute', id, responses, messageEntities);
    this.pushMessages(
      responses,
      this.tplManager.compile(id, this.parameters.template, messageEntities),
    );
    return Dialog.STATUS_COMPLETED;
  }
}

module.exports = TextDialog;
