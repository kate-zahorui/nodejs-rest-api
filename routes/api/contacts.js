const express = require("express");
const { authenticate, validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const { ctrlWrapper } = require("../../helpers");
const ctrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.get("/:id", authenticate, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeById));

router.put(
  "/:id",
  authenticate,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  authenticate,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
