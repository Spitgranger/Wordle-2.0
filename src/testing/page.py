from re import L
from element import BasePageElement
from locators import MainPageLocators
from selenium.webdriver.common.by import By

class SearchTextElement(BasePageElement):
    locator = 'q'

class BasePage(object):
    def __init__(self, driver):
        self.driver = driver

class MainPage(BasePage):
    search_text_element = SearchTextElement()

    def is_title_matches(self):
        return "Wordle 2.0" in self.driver.title

    def click_Q(self):
        element = self.driver.find_element(*MainPageLocators.key1)
        element.click()

    def click_W(self):
        element = self.driver.find_element(*MainPageLocators.key2)
        element.click()
    
    def click_E(self):
        element = self.driver.find_element(*MainPageLocators.key3)
        element.click()

    def click_R(self):
        element = self.driver.find_element(*MainPageLocators.key4)
        element.click()

    def click_T(self):
        element = self.driver.find_element(*MainPageLocators.key5)
        element.click()

    def click_Y(self):
        element = self.driver.find_element(*MainPageLocators.key6)
        element.click()

    def click_U(self):
        element = self.driver.find_element(*MainPageLocators.key7)
        element.click()
    
    def click_I(self):
        element = self.driver.find_element(*MainPageLocators.key8)
        element.click()

    def click_O(self):
        element = self.driver.find_element(*MainPageLocators.key9)
        element.click()

    def click_P(self):
        element = self.driver.find_element(*MainPageLocators.key10)
        element.click()
        
    def click_A(self):
        element = self.driver.find_element(*MainPageLocators.key11)
        element.click()

    def click_S(self):
        element = self.driver.find_element(*MainPageLocators.key12)
        element.click()
    
    def click_D(self):
        element = self.driver.find_element(*MainPageLocators.key13)
        element.click()

    def click_F(self):
        element = self.driver.find_element(*MainPageLocators.key14)
        element.click()

    def click_G(self):
        element = self.driver.find_element(*MainPageLocators.key15)
        element.click()

    def click_H(self):
        element = self.driver.find_element(*MainPageLocators.key16)
        element.click()

    def click_J(self):
        element = self.driver.find_element(*MainPageLocators.key17)
        element.click()
    
    def click_K(self):
        element = self.driver.find_element(*MainPageLocators.key18)
        element.click()

    def click_L(self):
        element = self.driver.find_element(*MainPageLocators.key19)
        element.click()

    def click_Enter(self):
        element = self.driver.find_element(*MainPageLocators.key20)
        element.click()

    def click_Z(self):
        element = self.driver.find_element(*MainPageLocators.key21)
        element.click()

    def click_X(self):
        element = self.driver.find_element(*MainPageLocators.key22)
        element.click()
    
    def click_C(self):
        element = self.driver.find_element(*MainPageLocators.key23)
        element.click()

    def click_V(self):
        element = self.driver.find_element(*MainPageLocators.key24)
        element.click()

    def click_B(self):
        element = self.driver.find_element(*MainPageLocators.key25)
        element.click()

    def click_N(self):
        element = self.driver.find_element(*MainPageLocators.key26)
        element.click()

    def click_M(self):
        element = self.driver.find_element(*MainPageLocators.key27)
        element.click()
    
    def click_Back(self):
        element = self.driver.find_element(*MainPageLocators.key28)
        element.click()

    def get_Solution(self):
        element = self.driver.find_element(*MainPageLocators.solution)
        return element.text

    def click_Slider(self):
        element = self.driver.find_element(*MainPageLocators.theme)
        element.click()
    
    def click_Stats(self):
        element = self.driver.find_element(*MainPageLocators.stats)
        element.click()
    
    def click_info(self):
        element = self.driver.find_element(*MainPageLocators.info)
        element.click()

    def click_four(self):
        element = self.driver.find_element(*MainPageLocators.four)
        element.click()

    def click_six(self):
        element = self.driver.find_element(*MainPageLocators.six)
        element.click()

    def click_share(self):
        element = self.driver.find_element(*MainPageLocators.share)
        element.click()

    def erase(self):
        for i in range(5):
            self.click_Back()
    
    def is_dark_mode(self):
        element = self.driver.find_element_by_tag_name("body")
        c = element.value_of_css_property('background-color')
        print(c)
        return c == "rgba(15, 24, 42, 1)"

    def exists_stats(self):
        return "stats-modal-bg modal-active" in self.driver.page_source

    def exists_info(self):
        try:
            element = self.driver.find_element_by_id("infocontent")
            s = element.get_attribute("style")
            return s == "display: block;"
        except:
            return False
    
    def check_letters(self, l0, l1, l2, l3, l4):
        element0 = self.driver.find_element_by_id("row0-tile-0")
        element1 = self.driver.find_element_by_id("row0-tile-1")
        element2 = self.driver.find_element_by_id("row0-tile-2")
        element3 = self.driver.find_element_by_id("row0-tile-3")
        element4 = self.driver.find_element_by_id("row0-tile-4") 
        return element0.text == l0 and element1.text == l1 and element2.text == l2 and element3.text == l3 and element4.text == l4
    
    def game_Won(self):
        element = self.driver.find_element_by_id("message")
        return element.text == 'Success'

    def check_first_letter(self):
        element = self.driver.find_element(By.ID, "row0-tile-0")
        s = element.get_attribute("style")
        if s == "background-color: rgb(120, 124, 126);":
            return "grey"
        elif s == "background-color: orange;":
            return "yellow"
        else:
            return "green"

    def check_key_colour(self, letter):
        element = self.driver.find_element(By.ID, letter)
        s = element.get_attribute("style")
        if s == "background-color: rgb(34, 197, 93); color: black;":
            return "green"
        elif s == "background-color: rgb(120, 124, 126); color: black;":
            return "grey"
        elif s == "background-color: orange; color: black;":
            return "yellow"
        return 

    def share_message(self):
        element = self.driver.find_element(By.ID, "message")
        return element.text == "Copied to clipboard"

    def enough_letters(self):
        element = self.driver.find_element(By.ID, "message")
        return element.text == "Not enough letters"
    
    def valid_word(self):
        element = self.driver.find_element(By.ID, "message")
        return element.text == "Word Not Found"