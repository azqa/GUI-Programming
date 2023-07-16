import tkinter as tk
from tkinter import messagebox
from tkinter import ttk


class CalculateGrade:
    def __init__(self):

        self.window = tk.Tk()
        self.window.geometry("300x180")
        self.window.title("CMSC 437 Calculator")
        self.window.resizable(True, True)
        self.average = tk.StringVar()

        # Frame for Bio
        self.frame1 = ttk.Frame(self.window)
        self.frame1.pack(pady=10)

        self.label1 = ttk.Label(self.frame1, text="Bio:")
        self.label1.pack(side="left", padx=5)

        self.entry1 = ttk.Entry(self.frame1)
        self.entry1.pack(padx=36)

        # Frame for Math
        self.frame2 = ttk.Frame(self.window)
        self.frame2.pack(pady=10)

        self.label2 = ttk.Label(self.frame2, text="Math:")
        self.label2.pack(side="left")

        self.entry2 = ttk.Entry(self.frame2)
        self.entry2.pack(padx=30)

        # Frame for Average
        self.frame3 = ttk.Frame(self.window)
        self.frame3.pack(pady=10)

        self.label3 = ttk.Label(self.frame3, text="Average:")
        self.label3.pack(side="left")

        self.label3 = ttk.Label(self.frame3, textvariable=self.average)
        self.label3.pack(padx=(10, 0))

        # Frame for buttons
        self.frame4 = ttk.Frame(self.window)
        self.frame4.pack(pady=10)

        self.calculate_button = ttk.Button(self.frame4, text="Calculate", command=self.calculate)
        self.calculate_button.pack(side="left")

        self.close_button = ttk.Button(self.frame4, text="Close", command=self.window.destroy)
        self.close_button.pack(side="left")

        #main loop call
        self.window.mainloop()

    # computes average with error checking
    def calculate(self):
        try:
            bioGrade = float(self.entry1.get())
            mathGrade = float(self.entry2.get())
            self.average.set((bioGrade + mathGrade) / 2)

        except ValueError:
            messagebox.showerror("Error", "The grades are not correct!")


if __name__ == "__main__":
    averageGrade = CalculateGrade()