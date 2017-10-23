class DialogView {
  render(key, parameters) {
    console.log('DialogView.render', key, parameters);
    switch (key) {
      case 'ask':
        return this.ask();
      case 'confirm':
        return this.confirm();
      case 'discard':
        return this.discard();
      case 'entitiesAsk':
        return this.entitiesAsk(parameters);
      case 'entitiesConfirm':
        return this.entitiesConfirm(parameters);
      case 'entityAsk':
        return this.entityAsk(parameters);
      case 'entityConfirm':
        return this.entityConfirm(parameters);
      default:
        return null;
    }
  }

  ask() {
    return 'continue dialog?';
  }

  confirm() {
    return 'dialog confirmed.';
  }

  discard() {
    return 'dialog discarded.';
  }

  entitiesAsk(parameters) {
    return `Which ${this.concatEntities(parameters.entities)}?`;
  }

  entitiesConfirm(parameters) {
    return `You want ${this.concatEntitiesValues(parameters.entities)} for the dialog.`;
  }

  entityAsk(parameters) {
    return `Which ${parameters.entity}?`;
  }

  entityConfirm(parameters) {
    return `You want ${parameters.entity.body} ${parameters.entity.dim}.`;
  }

  concatEntities(entities) {
    console.log('DialogView.concatEntities', entities);
    let result = '';
    entities.forEach((e) => {
      if (entities.length === 1 || entities.indexOf(e) === entities.length - 2) {
        result += `${e}`;
      } else if (entities.indexOf(e) === entities.length - 1) {
        result += ` and ${e}`;
      } else {
        result += `${e}, `;
      }
    });
    return result;
  }

  concatEntitiesValues(entities) {
    console.log('DialogView.concatEntitiesValues', entities);
    let result = '';
    let value;
    entities.forEach((e) => {
      value = e.body || e.values[0].value;
      if (entities.length === 1 || entities.indexOf(e) === entities.length - 2) {
        result += `${value}`;
      } else if (entities.indexOf(e) === entities.length - 1) {
        result += ` and ${value}`;
      } else {
        result += `${value}, `;
      }
    });
    return result;
  }
}

module.exports = DialogView;
