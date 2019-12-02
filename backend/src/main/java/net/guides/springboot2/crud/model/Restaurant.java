package net.guides.springboot2.crud.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@AttributeOverride(name="id", column = @Column(name = "ID"))
@Table(name = "restaurant")
public class Restaurant implements Serializable {
    private long id;
    private String name;
    private String address;
    private String password;
    private String phone;
    private String mail;

    public Restaurant(){

    }

    public Restaurant(String name, String address, String password, String phone, String mail){
        this.name = name;
        this.address = address;
        this.password = password;
        this.phone = phone;
        this.mail = mail;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "Name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "Address", nullable = false)
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name = "Password", nullable = false)
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    @Column(name = "Phone", nullable = false)
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Column(name = "Mail", nullable = false)
    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }

    @Override
    public String toString(){
        return "Restaurant [id=" + id + ", name=" + name + ", address=" + address + ", emailId=" + mail
                + ", phone=" + phone + "]";
    }
}
