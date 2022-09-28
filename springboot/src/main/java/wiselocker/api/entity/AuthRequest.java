package wiselocker.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthRequest{
    private String userName;
    private String password;


    public String getUserName(){
        return this.userName;
    }

    public String getPassword(){
        return this.password;
    }

}