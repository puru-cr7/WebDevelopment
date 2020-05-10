package com.example.demo;

/**
 * TODO Put here a description of what this class does.
 *
 * @author Purnendu.
 *         Created May 10, 2020.
 */

public interface Item {

	/**
	 * @return The item name
	 */
	String getName();

	/**
	 * @return The item cost per unit
	 */
	double getCost();

	/**
	 * @param cost The updated item cost
	 */
	void setCost(double cost);

}
