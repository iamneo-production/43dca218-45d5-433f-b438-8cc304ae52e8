package wiselocker.codejava;




public class UserModel {
    
	
	private String email;
    private String password;
    private String mobileNumber;
    private Boolean active;
    private String role;
     
     
    public UserModel()
    {
    	
    }
     
    public UserModel(String email, String password, String mobileNumber, Boolean active, String role) {
 		super();
 		this.email = email;
 		this.password = password;
 		this.mobileNumber = mobileNumber;
 		this.active = active;
 		this.role = role;
 	}
     
     
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
   
}
