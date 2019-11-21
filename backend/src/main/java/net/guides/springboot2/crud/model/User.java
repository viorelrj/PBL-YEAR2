package net.guides.springboot2.crud.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AttributeOverride(name="id", column=@Column(name = "ID"))
@Table(name = "users")
public class User implements Serializable {

    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
    private String Username;
    private String password;

    public User() {

    }

    public User(String firstName, String lastName, String emailId, String username, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.Username = username;
        this.password = password;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "First_Name", nullable = false)
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "Last_Name", nullable = false)
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "Mail", nullable = false)
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    @Column(name = "Username", nullable = false)
    public String getUsername(){return Username;}
    public void setUsername(String Username) { this.Username = Username; }

    @Column(name = "Password", nullable = false)
    public String getPassword(){return password;}
    public void setPassword(String password) { this.password = password; }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
                + ", Username=" + Username + "]";
    }

}