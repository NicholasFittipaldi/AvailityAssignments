package com.nickfitt.main;

import java.util.Stack;

public class ValidateLISPCode {
	
	public boolean isNested(String string) {
		Stack<Character> stack = new Stack<Character>();
		
		for (char character : string.toCharArray()) {
			int size = stack.size();
			
			if (character == '(')
				stack.push(character);
			else if (character == ')' && stack.isEmpty())
				return false;
			else if (character == ')' && stack.get(size - 1) == '(') {
				stack.pop();
			}
		}
		
		return true;
	}
}
