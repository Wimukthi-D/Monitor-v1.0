package com.backend.monitor.service;

import jakarta.mail.SendFailedException;
import org.eclipse.angus.mail.smtp.SMTPAddressFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;

    public String setupEmail(

            String to, String subject, String text) {
        try {
            MimeMessage message = emailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text, true);

//            FileSystemResource file = new FileSystemResource(new File(pathToAttachment));
//            helper.addAttachment(billId + ".pdf", file);

            emailSender.send(message);
            return "Sent";

        } catch (MailSendException e) {
            for (Exception ex : e.getFailedMessages().values()) {
                if (ex instanceof SendFailedException) {
                    SendFailedException sfe = (SendFailedException) ex;
                    if (sfe.getNextException() instanceof SMTPAddressFailedException) {
                        SMTPAddressFailedException smtpEx = (SMTPAddressFailedException) sfe.getNextException();
                        return "Invalid email";
                    }
                    return "Sent Failed";
                }
                return "Sent Failed";
            }
            return "Sent Failed";
        } catch (MessagingException e) {
            return "Sent Failed";
        } catch (Exception e) {
            return "Sent Failed Unexpectedly";
        }
    }

    public String sendEmai(String emailTo, BigDecimal temperature, Date date, Time time){ //
        String subject = "High Temperature Alert!";
        String text = STR."Please be advised of a high temperature warning recorded at \{temperature}°C on \{date} at \{time} requiring immediate action.";
        System.out.println(text);
        System.out.println("Calling...");
        return setupEmail(emailTo, subject, text);
    }
}
