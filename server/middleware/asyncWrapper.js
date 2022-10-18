const asyncWrapper = (callback) => {
  return async (req, res, next) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      // console.log(error);
      next(error);
    }
  };
};

module.exports = asyncWrapper;
/**
 *
 * callback = controller fn
 * the callback fn is executed here
 * and any error that is thrown will be caught in the catch block
 */
