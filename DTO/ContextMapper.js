class ContextMapper {
  /**
   * Map Payload to context
   * @param {Object} context Mapper Object
   * @param {Object} payload External Object
   */
  MapRecord(context, payload) {
    let newPayload = [];
    let responseObject = [];
    let transferObject = Object.assign({}, context);
    try {
      //For multiple Object
      payload.map((item) => {
        newPayload.push(item);
      });
    } catch (error) {
      //For One object
      newPayload.push(payload);
    }
    newPayload.forEach((record) => {
      for (var data in record) {
        if (transferObject.hasOwnProperty(data)) {
          transferObject[data] = record[data];
        }
      }
      responseObject.push(transferObject);
    });
    return responseObject;
  }

  ValidateRecord(validator, context) {
    let validate = validator;
    if (validate.success == true) {
      validate.data = context;
      return validate;
    } else {
      return validate;
    }
  }
}

module.exports = ContextMapper;
