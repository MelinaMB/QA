package com.selenium.app;
import org.jspecify.annotations.Nullable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import  org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;
import java.util.Set;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        //configurar la ruta del chromedriver
        System.setProperty("webdriver.chrome.driver", "/Users/melinabustos/Downloads/chromedriver-mac-x64/chromedriver");

        //crear instancia de chrome driver
        WebDriver driver = new ChromeDriver();

        //navegar a google
        driver.get("https://www.google.com");

        //cerrar el navegador
        //driver.quit();


    }
}