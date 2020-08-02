import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=300&nat=us";

// Export an object with a "search" method that searches the Random User Generator API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
