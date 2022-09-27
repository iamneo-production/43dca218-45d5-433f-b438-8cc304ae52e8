package wiselocker.codejava;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SignupService {
    
	@Autowired
	private SignupRepository signuprepository;
	
	public boolean saveUser(UserModel usermodel)
	{
		
		List<UserModel> repos = new ArrayList<>();
		signuprepository.findAll()
		.forEach(repos::add);
		
		if(repos.contains(usermodel))
		{
			return false;
		}
		
		signuprepository.save(usermodel);
		return true;
	}
	
}
