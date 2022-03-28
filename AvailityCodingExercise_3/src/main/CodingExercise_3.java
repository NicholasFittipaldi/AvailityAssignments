package main;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

public class CodingExercise_3 {
	static Map<String, ArrayList<String[]>> companies = new HashMap<>();
	static String header = "";

	public static void main(String[] args) {
		mapInsuranceCompanies("CSVDemo.csv");
		Comparator<String[]> comparator = createComparator();
		createCSVFiles(comparator);
	}
	
	public static void mapInsuranceCompanies(String fileName) {
		String line = "";
		
		try (BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName))) {			
			header = bufferedReader.readLine();
			while((line = bufferedReader.readLine()) != null) {
				boolean duplicate = false;
				String[] entries = line.split(",");
				String company = entries[3];
				
				if (!companies.containsKey(company)) {
					companies.put(company, new ArrayList<String[]>());
					companies.get(company).add(entries);
				}
				else {
					if (!companies.get(company).isEmpty()) {
						for (String[] string : companies.get(company)) {
							if (string[0].equalsIgnoreCase(entries[0]) && Integer.parseInt(string[2]) < Integer.parseInt(entries[2])) {
								companies.get(company).remove(string);
								companies.get(company).add(entries);
								duplicate = true;
								break;
							}
						}
						
						if (!duplicate)
							companies.get(company).add(entries);
					}
					else
						companies.get(company).add(entries);
				}
			}
			
			System.out.println(companies.toString());
			bufferedReader.close();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static Comparator<String[]> createComparator() {
		Comparator<String[]> compareNames = new Comparator<String[]>() {
			public int compare(String[] line_1, String[] line_2) {
				return line_1[1].compareToIgnoreCase(line_2[1]);
			}
		};
		
		return compareNames;
	}
	
	public static void createCSVFiles(Comparator<String[]> compareNames) {
		for (Map.Entry<String, ArrayList<String[]>> entry : companies.entrySet()) {
			Collections.sort(entry.getValue(), compareNames);
			
			try {
				File newFile = new File(entry.getKey() + ".csv");
				if (newFile.createNewFile())
					System.out.println("File created: " + newFile.getName());
				
				PrintWriter writer = new PrintWriter(entry.getKey() + ".csv");
				
				writer.write(header + "\n");
				for (String[] string : entry.getValue())
					writer.write(Arrays.toString(string).replace("[", "").replace("]", "") + "\n");
				
				writer.close();
			}
			catch (FileNotFoundException e) {
				e.printStackTrace();
			} 
			catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
