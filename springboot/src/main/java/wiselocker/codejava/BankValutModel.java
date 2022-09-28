package wiselocker.codejava;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BankValutModel {
	
@Id
private String valutid;
private String userid;
private long accountnumber;
private String accountname;
private String IFSC;
private String Username;
private String password;



public String getValutid() {
    return valutid;
}
public void setValutid(String valutid) {
    this.valutid = valutid;
}
public String getUserid() {
    return userid;
}
public void setUserid(String userid) {
    this.userid = userid;
}
public long getAccountnumber() {
    return accountnumber;
}
public void setAccountnumber(long accountnumber) {
    this.accountnumber = accountnumber;
}
public String getAccountname() {
    return accountname;
}
public void setAccountname(String accountname) {
    this.accountname = accountname;
}
public String getIFSC() {
    return IFSC;
}
public void setIFSC(String iFSC) {
    IFSC = iFSC;
}
public String getUsername() {
    return Username;
}
public void setUsername(String username) {
    Username = username;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public BankValutModel(String valutid, String userid, long accountnumber, String accountname, String iFSC,
        String username, String password) {
    this.valutid = valutid;
    this.userid = userid;
    this.accountnumber = accountnumber;
    this.accountname = accountname;
    IFSC = iFSC;
    Username = username;
    this.password = password;
}

}


