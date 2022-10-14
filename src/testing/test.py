## @file test.py
# Author Richard


from timeit import timeit
import unittest
from selenium import webdriver
import page
import time
import timeit
import pyautogui
import string 
import random
import constants
PATH = "/home/rich/Documents/testing/chromedriver"
## @brief This class inclues the unit tests for Wordle 2.0
class WordleTest(unittest.TestCase):
    #Setup the test
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://127.0.0.1:5500/")
    #
    def test_key_functionality(self):
        main_page = page.MainPage(self.driver)
        main_page.click_Q()
        main_page.click_W()
        main_page.click_E()
        main_page.click_R()
        main_page.click_T()
        self.assertTrue(main_page.check_letters("Q", "W", "E", "R", "T"))
        main_page.erase()
        main_page.click_Y()
        main_page.click_U()
        main_page.click_I()
        main_page.click_O()
        main_page.click_P()
        self.assertTrue(main_page.check_letters("Y", "U", "I", "O", "P"))
        main_page.erase()
        main_page.click_A()
        main_page.click_S()
        main_page.click_D()
        main_page.click_F()
        main_page.click_G()
        self.assertTrue(main_page.check_letters("A", "S", "D", "F", "G"))
        main_page.erase()
        main_page.click_H()
        main_page.click_J()
        main_page.click_K()
        main_page.click_L()
        main_page.click_Z()
        self.assertTrue(main_page.check_letters("H", "J", "K", "L", "Z"))
        main_page.erase()
        main_page.click_X()
        main_page.click_C()
        main_page.click_V()
        main_page.click_B()
        main_page.click_N()
        self.assertTrue(main_page.check_letters("X", "C", "V", "B", "N"))
        main_page.erase()
        main_page.click_M()
        self.assertTrue(main_page.check_letters("M", "", "", "", "" ))


    def test_game_won_5(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.game_Won())
    
    def test_game_won_4(self):
        main_page = page.MainPage(self.driver)
        main_page.click_four()
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.game_Won())

    def test_game_won_6(self):
        main_page = page.MainPage(self.driver)
        main_page.click_six()
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.game_Won())

    def test_gameboard_colours_grey_5(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        p = list(set(string.ascii_uppercase) - set(solution))
        c = random.choice(p)
        print("lost" + c)
        newList = [i for i in constants.valid if i.startswith(c.lower())]
        pyautogui.write(newList[1])
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "grey")

    def test_gameboard_colours_green_5(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "green")

    def test_gameboard_colours_grey_4(self):
        main_page = page.MainPage(self.driver)
        main_page.click_four()
        solution = main_page.get_Solution()
        p = list(set(string.ascii_uppercase) - set(solution))
        c = random.choice(p)
        print("lost" + c)
        newList = [i for i in constants.WORDS4 if i.startswith(c.lower())]
        pyautogui.write(newList[1])
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "grey")

    def test_gameboard_colours_green_4(self):
        main_page = page.MainPage(self.driver)
        main_page.click_four()
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "green")

    def test_gameboard_colours_grey_6(self):
        main_page = page.MainPage(self.driver)
        main_page.click_six()
        solution = main_page.get_Solution()
        p = list(set(string.ascii_uppercase) - set(solution))
        c = random.choice(p)
        print("lost" + c)
        newList = [i for i in constants.WORDS6 if i.startswith(c.lower())]
        pyautogui.write(newList[1])
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "grey")

    def test_gameboard_colours_green_6(self):
        main_page = page.MainPage(self.driver)
        main_page.click_six()
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval=0.08)
        main_page.click_Enter()
        self.assertTrue(main_page.check_first_letter() == "green")
    
    def test_key_colours_grey(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        p = list(set(string.ascii_uppercase) - set(solution))
        c = random.choice(p)
        newList = [i for i in constants.valid if i.startswith(c.lower())]
        pyautogui.write(newList[1])
        main_page.click_Enter()
        self.assertTrue(main_page.check_key_colour(c) == "grey")

    def test_not_enough_letter(self):
        main_page = page.MainPage(self.driver)
        main_page.click_A()
        main_page.click_Enter()
        self.assertTrue(main_page.enough_letters())

    def test_valid_word(self):
        main_page = page.MainPage(self.driver)
        main_page.click_A()
        main_page.click_B()
        main_page.click_C()
        main_page.click_D()
        main_page.click_E()
        main_page.click_Enter()
        self.assertTrue(main_page.valid_word())

    def test_key_colours_green(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval = 0.08)
        main_page.click_Enter()
        print(main_page.check_key_colour(solution[0]))
        self.assertTrue(main_page.check_key_colour(solution[0]) == "green")

    def test_share_message(self):
        main_page = page.MainPage(self.driver)
        solution = main_page.get_Solution()
        pyautogui.write(solution, interval = 0.08)
        main_page.click_Enter()
        main_page.click_share()
        self.assertTrue(main_page.share_message())
    
    def test_dark_functionality(self):
        main_page = page.MainPage(self.driver)
        main_page.click_Slider()
        self.assertTrue(main_page.is_dark_mode())

    def test_stats_functionality(self):
        main_page = page.MainPage(self.driver)
        main_page.click_Stats()
        self.assertTrue(main_page.exists_stats())
    
    def test_info_functionality(self):
        main_page = page.MainPage(self.driver)
        main_page.click_info()
        self.assertTrue(main_page.exists_info())

    def test_load_time(self):
        start = timeit.timeit()
        main_page = page.MainPage(self.driver)
        end = timeit.timeit()
        self.assertTrue((end-start) < 0.25)

    def tearDown(self):
        time.sleep(.5)
        #print("GOUGOGUGOUGOUGOUSOUGOSUGOSUGOUS")


if __name__ == "__main__":
    unittest.main()