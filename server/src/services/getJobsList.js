//Get the users username from Business json
const jobs = require("../sample_data/jobs.json");
const locations = require("../sample_data/locations.json");
const classifications = require("../sample_data/classifications.json");
const businesses = require("../sample_data/businesses.json");
//reading json
let businessData =businesses.businesses;
let classificationData =classifications.classifications;
let locationsData =locations.locations;
let jobsData =jobs.jobs;

  //Get the enquired jobs based on selected User's business
const getJobsList = async (name) => {
  let userBusiness = {}
 
  //businesses data read
  let businessUser = businessData.filter(business => business.username === name);
  if(businessUser === undefined || businessUser.length === 0) {
     userBusiness['error_message'] = 'No user available'
     return userBusiness
  }
  userBusiness ['username'] = businessUser[0].username;
  userBusiness ['display_name'] = businessUser[0].display_name;

  //classification data
  let classify = businessUser[0].classifications;
  let classificationName = classificationData.filter(classification =>  classify.find( classifyData => classifyData === classification.id))

  //location data
  let loc = businessUser[0].locations_served;
  let locName = locationsData.filter(location =>  loc.find( locData => locData === location.id))
 
  //jobs check
  let jobClassifyData = jobsData.filter(job =>  classify.find( classificationName => classificationName === job.classification) &&  loc.find( jobLoc => jobLoc === job.location))
  jobClassifyData.forEach(jobDetail => {
    jobDetail['classification_name'] = classificationName.find(classifyName => classifyName.id === jobDetail.classification).name
    jobDetail['location_name'] = locName.find(lociName => lociName.id === jobDetail.location).name
  })

  userBusiness['jobs']= jobClassifyData

  return userBusiness;
};

module.exports = getJobsList
