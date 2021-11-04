package com.devduperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devduperior.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {


}
