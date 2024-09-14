package com.restaurant.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Setter
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactInformation {
    private String email;
    private String mobile;
    private String twitter;
    private String instagram;

   
}

