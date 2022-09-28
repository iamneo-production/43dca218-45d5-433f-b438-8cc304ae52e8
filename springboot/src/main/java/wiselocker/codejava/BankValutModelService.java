package wiselocker.codejava;


import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class BankValutModelService {
    
    private BankValutModelService bankvalutmodelservice;

    public List<BankValutModel> getBankinfo()
    {
        List<BankValutModel> repos = new ArrayList<>();
		bankvalutmodelservice.getall()
		.forEach(repos::add);
        return repos;
    }

	public 

}
