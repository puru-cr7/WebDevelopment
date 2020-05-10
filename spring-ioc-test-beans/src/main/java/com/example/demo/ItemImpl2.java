package com.example.demo;

/**
 * TODO Put here a description of what this class does.
 *
 * @author Purnendu.
 *         Created May 10, 2020.
 */
public class ItemImpl2 implements Item {

	private final String s;

	public ItemImpl2(final String s) {
		this.s = s;
	}

	@Override
	public String getName() {
		return "item2 :" + this.s;
	}

	@Override
	public double getCost() {
		return 0;
	}

	@Override
	public void setCost(final double cost) {

	}

}
