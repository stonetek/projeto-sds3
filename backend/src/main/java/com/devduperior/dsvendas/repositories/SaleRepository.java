package com.devduperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devduperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {


}
