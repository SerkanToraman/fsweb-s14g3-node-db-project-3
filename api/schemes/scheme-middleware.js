const schemesModel = require('./scheme-model.js')
/*
  Eğer `scheme_id` veritabanında yoksa:

  durum 404
  {
    "message": "scheme_id <gerçek id> id li şema bulunamadı"
  }
*/
const checkSchemeId = async (req, res, next) => {
try {
  const { scheme_id } = req.params
  let schmeIDExist = await schemesModel.findById(scheme_id);
  if(!schmeIDExist){
    res.status(404).json({
      "message": "scheme_id <gerçek id> id li şema bulunamadı"
    })
  }else {
    req.schemeData = schmeIDExist;
    next()
  }
}
catch (error) {
  next(error);
}

}

/*
  Eğer `scheme_name` yoksa, boş string ya da string değil:

  durum 400
  {
    "message": "Geçersiz scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  Eğer `instructions` yoksa, boş string yada string değilse, ya da
  eğer `step_number` sayı değilse ya da birden küçükse:

  durum 400
  {
    "message": "Hatalı step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
