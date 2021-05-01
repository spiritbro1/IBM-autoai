const axios = require("axios")

// NOTE: you must manually enter your API_KEY below using information retrieved from your IBM Cloud
const API_KEY = "n196x_zB-wCZ6ya9gakTWDgbuSbGQL4Hpp8k34Limixc";
const params = new URLSearchParams()
params.append('grant_type', 'urn:ibm:params:oauth:grant-type:apikey')
params.append('apikey', API_KEY)


const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
axios.post("https://iam.cloud.ibm.com/identity/token", params, config)
  .then((result) => {
  const token=result.data.access_token
  const config = {
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json;charset=UTF-8"
    }
  }
  const fields=["Age","Gender","Polyuria","Polydipsia","sudden weight loss","weakness","Polyphagia","Genital thrush","visual blurring","Itching","Irritability","delayed healing","partial paresis","muscle stiffness","Alopecia","Obesity"]
  const value=[20,"Male",null,null,null,null,null,null,null,null,null,null,null,null,null,null]
  const payload={"input_data": [{fields, "values": [value]}]}
  axios.post("https://jp-tok.ml.cloud.ibm.com/ml/v4/deployments/9567b9b7-f5a6-4428-a73b-3a7065c37f4b/predictions?version=2021-04-30",payload,config).then(a=>console.log(a.data))
  })
