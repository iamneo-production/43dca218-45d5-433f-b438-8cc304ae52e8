// package wiselocker.codejava;

// import java.util.List;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class controllers {
// 	@Autowired
// 	private SignupService signupservice;
	
// 		/*SIGNUP*/
	
// 	@RequestMapping(method=RequestMethod.POST, value="/signup", consumes="application/json")
// 	public boolean addUser(@RequestBody UserModel usermodel)
// 	{
// 		signupservice.saveUser(usermodel);
// 		return true;  /*check whether user already exists or not*/
// 	}
	
// 	/*LOGIN*/
	
// 	@RequestMapping(method=RequestMethod.POST, value="/login", consumes="application/json")
// 	public boolean checkuser(@RequestBody UserModel usermodel)
// 	{
// 		if(signupservice.checkuser(usermodel))
// 		{
// 			return true;
// 		}
// 		else
// 		{
// 			return false;
// 		}
// 	}
	
// 	@Autowired
// 	private BankValutService bankvalutservice; 
	
// 		/*GET ALL BANK INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.GET, value="/bank", consumes="application/json")
// 	public List<BankValutModel> getallbankdetails()
// 	{
// 		return bankvalutservice.getall();
// 	}
	
	
// 	/*ADD BANK INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.POST, value="/bank/{id}", consumes="application/json")
// 	public String addbankdetails(@RequestBody String id)
// 	{
// 	bankvalutservice.adddetailsbank(id);
// 		return "Information Added Successfully";
// 	}
	
// 	/*UPDATE BANK INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.PUT, value="/bank/{id}", consumes="application/json")
// 	public String updatedetailsbank(@RequestBody String id) 
// 	{
// 		bankvalutservice.updatedetails(id);
// 		return "Information Updated";
//      }
	
// 	/*DELETE BANK INFORMATION*/
	
//     @RequestMapping(method=RequestMethod.DELETE, value="/bank/{id}", consumes="application/json")
// 	public String deletedetailsbank(@RequestBody String id) 
// 	{
// 		bankvalutservice.deletedetails(id);
// 		return "Information Deleted";
// 	}
	
	
// 	@Autowired
// 	private MediaService mediaservice;
	
// 	/*GET MEDIA INFO*/
	
// 	@RequestMapping(method=RequestMethod.GET, value="/media", consumes="application/json")
// 	public List<MediaValutModel> getallmediadetails()
// 	{
// 		return mediavalutservice.getall();
// 	}
	

// 	/*ADD MEDIA INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.POST, value="/media/{id}", consumes="application/json")
//     public String addmediadetails(@RequestBody String id)
// 	{
// 		mediavalutservice.mediadetails(id);
// 		return "Media Added";
//      }
	
//    /*UPDATE MEDIA INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.PUT, value="/media/{id}", consumes="application/json")
// 	public String updatedetailsmedia(@RequestBody String id) 
// 	{
// 		mediavalutservice.updatedetailsmedia(id);
// 		return "Media Updated";
//     }
	
// 	/*DELETE MEDIA INFORMATION*/
	
// 	@RequestMapping(method=RequestMethod.DELETE, value="/media/{id}", consumes="application/json")
// 	public String deletedetailsmedia(@RequestBody String id) 
// 	{
// 		mediavalutservice.deletedetailsmedia(id);
// 		return "Media Deleted";
// 	}
	
// 	@Autowired
// 	private CredentialsService credentialsservice;
// //	
// //	/*GET CREDENTIALS INFO*/
// //	
// //	@RequestMapping(method=RequestMethod.GET, value="/credentials", consumes="application/json")
// //	public List<CredentialsValutModel> getallcredentialsdetails()
// //	{
// //		return credentialsservice.getall();
// //	}
// //	
// //
// //	/*ADD CREDENTIALS INFORMATION*/
// //	
// //	@RequestMapping(method=RequestMethod.POST, value="/credentials/{id}", consumes="application/json")
// //	public String addcredentialsdetails(@RequestBody String id)
// //	{
// //		credentialsservice.adddetails(id);
// //		return "Credentials Added Successfully";
// //	}
// //	
// //    /*UPDATE CREDENTIALS INFORMATION*/
// //	
// //	@RequestMapping(method=RequestMethod.PUT, value="/credentials/{id}", consumes="application/json")
// //	public String updatedetails(@RequestBody String id) 
// //	{
// //		credentialsvalutservice.updatedetails(id);
// //		return "Credentials Updated";
// //	}
// //	
// //	/*DELETE CREDENTIALS INFORMATION*/
// //	
// //	@RequestMapping(method=RequestMethod.DELETE, value="/credentials/{id}", consumes="application/json")
// //	public String deletedetails(@RequestBody String id) 
// //	{
// //		credentialsvalutservice.deletedetails(id);
// //		return "Credentials Deleted";
// //	}
// //	
// //	@Autowired
// //	private Admin admin;
// //	
// //	/*GET ALL USERS INFO*/
// //	
// //	@RequestMapping(method=RequestMethod.GET, value="/admin/user", consumes="application/json")
// //	public List<UserModel> getallusersdetails()
// //	{
// //		return admin.getall();
// //	}
// //	
// //
// //	/*APPROVE USER*/
// //	
// //	@RequestMapping(method=RequestMethod.POST, value="/admin/approveUser", consumes="application/json")
// //	public String addcredentialsdetails(@RequestBody UserModel usermodel)
// //	{
// //		admin.approvedetails(usermodel);
// //		return "Approved Successfully";
// //	}
// //	
// //    /*UPDATE USER INFORMATION*/
// //	
// //	@RequestMapping(method=RequestMethod.PUT, value="admin/update/{id}", consumes="application/json")
// //	public String updatedetailsuser(@RequestBody String id) 
// //	{
// //		admin.updatedetails(id);
// //		return "User Updated";
// //	}
// //	
// //	/*DELETE USER INFORMATION*/
// //	
// //	@RequestMapping(method=RequestMethod.DELETE, value="/admin/delete/{id}", consumes="application/json")
// //	public String deletedetailsuser(@RequestBody String id) 
// //	{
// //		admin.deletedetails(id);
// //		return "User Removed";
// //	}
// //	
// //	/*GET SPECIFIC USER*/
// //	
// //	@RequestMapping(method=RequestMethod.DELETE, value="/admin/user/{id}", consumes="application/json")
// //	public UserModel getuser(@RequestBody String id)
// //	{
// //		return admin.getuser(id);
// //	}
// //	
	
// }

