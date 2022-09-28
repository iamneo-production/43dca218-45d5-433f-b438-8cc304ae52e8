package wiselocker.codejava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Loginservices {
    
    @Autowired
    private Loginservices loginservices;

    public boolean checkuser(UserModel usermodel)
    {
		boolean flag = loginservices.equals(usermodel);
		return flag;
    }

}
