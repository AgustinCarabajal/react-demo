export default function errorHandler(props) {
  // En la mayoría de los casos es preferible no arrojar una excepción
  // ValidationFailedError para no superpoblar el log con validaciones de usuario.
  function ValidationFailedError(message) {
    this.name = 'ValidationFailedError';
    this.message = message || 'The validations of the operation were not overcome.';
  }
  ValidationFailedError.prototype = new Error();
  ValidationFailedError.prototype.constructor = ValidationFailedError;

  function NotifyFailedValidations(modelState, raiseError) {
    const errors = [];
    Object.keys(modelState).forEach((key) => {
      for (let i = 0; i < modelState[key].length; i += 1) {
        errors.push(modelState[key][i]);
      }
    });
    let userMessage = (new ValidationFailedError()).message;
    userMessage += ':\n';
    userMessage += errors.toString();
    if (raiseError) {
      throw new ValidationFailedError(userMessage);
    } else {
      alert(userMessage);
    }
  }

  /* function IsValidObject(instance) {
        return instance !== undefined && instance !== null
        && Object.getPrototypeOf(instance) === Object.prototype;
    } */

  /*
        EXCEPCIONES CUSTOM
        Note: before creating a new type of exception, verify that it can not be resolved
        with those that already include Javascript:
            - Error:            Thrown when runtime errors occur. The Error object can
                                also be used as a base object for user-defined exceptions.
            - RangeError:       Indicates an error when a value is not in the set or
                                range of allowed values.
            - ReferenceError:   Represents an error when a non-existent variable is
                                referenced.
            - SyntaxError:      Represents an error when trying to interpret
                                syntactically invalid code.
            - TypeError:        Represents an error when a value is not of
                                the expected type.
            - URIError:         Represents an error when a global URI handling
                                function was used in a wrong way.
            - EvalError:        Indicates an error regarding the global eval() function.
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
    */

  function BlockedOrRestrictedEndpointError(message) {
    this.name = 'BlockedOrRestrictedEndpointError';
    this.message = message || 'It is not possible to connect to the remote server. Check the availability of the Web API endpoint (if applicable) or the validity of a CORS restriction.';
  }
  BlockedOrRestrictedEndpointError.prototype = new Error();
  BlockedOrRestrictedEndpointError.prototype.constructor = BlockedOrRestrictedEndpointError;

  function ServerSideUnhandledExceptionError(message) {
    this.name = 'ServerSideUnhandledExceptionError';
    this.message = message || 'An unhandled exception occurred on the application server.';
  }
  ServerSideUnhandledExceptionError.prototype = new Error();
  ServerSideUnhandledExceptionError.prototype.constructor = ServerSideUnhandledExceptionError;

  function NotFoundError(message) {
    this.name = 'NotFoundError';
    this.message = message || 'Element not found to perform the requested operation.';
  }
  NotFoundError.prototype = new Error();
  NotFoundError.prototype.constructor = NotFoundError;

  function VerbNotAllowedOrMethodNotFoundError(message) {
    this.name = 'VerbNotAllowedOrMethodNotFoundError';
    this.message = message || 'Verb not allowed or the corresponding method of the controller does not have the parameters properly associated.';
  }
  VerbNotAllowedOrMethodNotFoundError.prototype = new Error();
  VerbNotAllowedOrMethodNotFoundError.prototype.constructor = VerbNotAllowedOrMethodNotFoundError;

  function ApplicationStoreMisconfiguredError(message) {
    this.name = 'ApplicationStoreMisconfiguredError';
    this.message = message || 'Application store was correctly configured or its configuration was discarded.';
  }
  ApplicationStoreMisconfiguredError.prototype = new Error();
  ApplicationStoreMisconfiguredError.prototype.constructor = ApplicationStoreMisconfiguredError;

  // Cambiar message
  function NotAuthorized(message) {
    this.name = 'NotAuthorized';
    this.message = message || '401 - Unauthorized.';
  }
  NotAuthorized.prototype = new Error();
  NotAuthorized.prototype.constructor = NotAuthorized;

  // Cambiar message
  function AccessDenied(message) {
    this.name = 'AccessDenied';
    this.message = message || '403 - Forbidden.';
  }
  AccessDenied.prototype = new Error();
  AccessDenied.prototype.constructor = AccessDenied;

  // Cambiar message
  function NotAcceptable(message) {
    this.name = 'NotAcceptable';
    this.message = message || '406 - Not Acceptable.';
  }
  NotAcceptable.prototype = new Error();
  NotAcceptable.prototype.constructor = NotAcceptable;


  window.onerror = function (column, errorObj) {
    if (errorObj.name) {
      if (column !== undefined || errorObj !== undefined) {
        switch (errorObj.name) {
          case NotifyFailedValidations.name: // 400
            alert((new NotifyFailedValidations()).message);
            break;
          case NotAuthorized.name: // 401
            alert('An error occurred in the operation due to lack of permissions. Contact the support staff.');
            props.logOut();
            break;
          case AccessDenied.name: // 403
            // If forbidden loggout the user
            props.logOut();
            break;
          case NotFoundError.name: // 404
            alert((new NotFoundError()).message);
            break;
          case VerbNotAllowedOrMethodNotFoundError.name: // 405
            alert((new VerbNotAllowedOrMethodNotFoundError()).message);
            break;
          case NotAcceptable.name: // 406
            alert((new NotAcceptable()).message);
            break;
          case ServerSideUnhandledExceptionError.name: // 500
            alert((new ServerSideUnhandledExceptionError()).message);
            break;
          case ValidationFailedError.name:
            alert((new ValidationFailedError()).message);
            break;
          case BlockedOrRestrictedEndpointError.name: // 0
            alert((new BlockedOrRestrictedEndpointError()).message);
            break;
          default:
            alert('An error occurred in the operation. See the details in the browser console and contact the support staff.');
        }
        // return true;
      } else {
        alert('An error occurred in the operation. See the details in the browser console and contact the support staff.');
      }
    }

    if (errorObj && errorObj.failureCallback) errorObj.failureCallback();

    return false;
  };
}
