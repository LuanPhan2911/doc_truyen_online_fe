import { toast } from "react-toastify";

const isEmptyObject = (obj) => {
  return Object?.keys.length === 0;
};
const isEmptyArray = (arr) => {
  return arr?.length === 0;
};
function isFunctionalComponent(Component) {
  return (
    typeof Component === "function" && // can be various things
    !(
      (
        Component.prototype && // native arrows don't have prototypes
        Component.prototype.isReactComponent
      ) // special property
    )
  );
}

function isClassComponent(Component) {
  return !!(
    typeof Component === "function" &&
    Component.prototype &&
    Component.prototype.isReactComponent
  );
}
const checkPropertiesIsEmpty = (obj, except) => {
  if (except && except.length > 0) {
    for (let key in obj) {
      if (except.includes(key)) {
        continue;
      }
      if (obj[key] === null || obj[key] === "" || obj[key] === undefined) {
        return true;
      }
      if (isEmptyObject(obj[key])) {
        return true;
      }
      if (isEmptyArray(obj[key])) {
        return true;
      }
    }
  } else {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === "" || obj[key] === undefined) {
        return true;
      }
      if (isEmptyObject(obj[key])) {
        return true;
      }
      if (isEmptyArray(obj[key])) {
        return true;
      }
    }
  }
  return false;
};
const handleErrorApiResponse = (error) => {
  let { status, data } = error.response;
  if (status === 400) {
    let { errors } = data;
    for (const key in errors) {
      if (Object.hasOwnProperty.call(errors, key)) {
        errors[key].forEach((item) => {
          toast.error(item);
        });
      }
    }
  }
};
export {
  isFunctionalComponent,
  isClassComponent,
  checkPropertiesIsEmpty,
  handleErrorApiResponse,
};
