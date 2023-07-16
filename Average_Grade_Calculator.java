

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class AzqaAsad extends JFrame implements ActionListener {
   
    JLabel bioLabel = new JLabel("BIO:");
    JLabel mathLabel = new JLabel("MATH:");
    JLabel statLabel = new JLabel("STAT:");
    JLabel engLabel = new JLabel("ENG:");

    JTextField bioText = new JTextField(10);
    JTextField mathText = new JTextField(10);
    JTextField statText = new JTextField(10);
    JTextField engText = new JTextField(10);

    //panels for four subjects
    JPanel panel1 = new JPanel();
    JPanel panel2 = new JPanel();
    JPanel panel3 = new JPanel();
    JPanel panel4 = new JPanel();
    //panel for the average label
    JPanel panel5 = new JPanel();
    //panel for the calculate button 
    JPanel panel6 = new JPanel();
    //panel for the subejcts 
    JPanel pnLeft = new JPanel();
    JPanel pnRight = new JPanel();
    //panel for label and calculate button
    JPanel pnAvg = new JPanel();

    JLabel avgLabel = new JLabel("Average:");
    JButton avgButton = new JButton("Calculate");


    public AzqaAsad() {
        setTitle("Azqa Asad");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       

        panel1.add( bioLabel ); 
        panel1.add( bioText );
        bioText.addActionListener(this);

        panel2.add( mathLabel ); 
        panel2.add( mathText );
        mathText.addActionListener(this);


        panel3.add( statLabel ); 
        panel3.add( statText );
        statText.addActionListener(this);


        panel4.add( engLabel ); 
        panel4.add( engText);
        engText.addActionListener(this);


        panel5.add( avgLabel ); 
        //avgLabel.setHorizontalAlignment(SwingConstants.CENTER);

        panel6.add( avgButton);
        avgButton.addActionListener(this);

        // set layout manager for left panel, add two small panels to it
        pnLeft.setLayout( new BoxLayout( pnLeft, BoxLayout.Y_AXIS ) );
        pnLeft.add ( panel1 ); 
        pnLeft.add( panel2 );
        //pnLeft.add( panel5 );
       

        // set layout manager for right panel, add two small panels to it
        pnRight.setLayout( new BoxLayout( pnRight, BoxLayout.Y_AXIS ) );
        pnRight.add( panel3); 
        pnRight.add( panel4);
        //pnRight.add( panel6);

        pnAvg.setLayout( new BoxLayout( pnAvg, BoxLayout.Y_AXIS ) );
        pnAvg.add( panel5); 
        pnAvg.add( panel6); 

        // add left and right panels to the frame
        setLayout( new FlowLayout() );
        add( pnLeft);
        add( pnRight );
        add(pnAvg);
    
        

    }

    public static void main(String[] args) {
        AzqaAsad calc = new AzqaAsad();
        calc.pack();
        calc.setVisible(true);
        //calc.setPreferredSize(new Dimension(250, 250));
        calc.setSize( 250, 250 );

        
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        try {
            double bioGrade = Double.parseDouble(bioText.getText());
            double mathGrade = Double.parseDouble(mathText.getText());
            double statGrade = Double.parseDouble(statText.getText());
            double engGrade = Double.parseDouble(engText.getText());

            double average = (bioGrade + mathGrade + statGrade + engGrade) / 4;
            avgLabel.setText("Average:             " + String.format("%.4f", average));
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(this, "Wrong Input Value!","Error", JOptionPane.ERROR_MESSAGE);
        }
    }
}
