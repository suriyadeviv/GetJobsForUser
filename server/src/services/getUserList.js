
const businesses = require("../sample_data/businesses.json");
let businessData =businesses.businesses;

//Get the users username from Business json
const getUsersList = async () => {
  let userList = []
 
  businessData.filter(business => userList.push(business.username));
  return userList;
};

module.exports = getUsersList
