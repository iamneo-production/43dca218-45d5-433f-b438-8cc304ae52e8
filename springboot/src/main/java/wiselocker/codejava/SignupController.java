// package wiselocker.codejava;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// @RestController
// public class SignupController {
    
	
// 	@Autowired
// 	private SignupService signupservice; 
	
// 	@RequestMapping(method=RequestMethod.GET, value="/signup")
// 	public boolean checkuser(@RequestBody UserModel usermodel)
// 	{
// 		if(signupservice.saveUser(usermodel))
// 		{
// 			return true;
// 		}
// 		else
// 		{
// 			return false;
// 		}
// 	}
// }
