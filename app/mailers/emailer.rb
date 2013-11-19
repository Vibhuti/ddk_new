require 'erb'

class Emailer < ActionMailer::Base

  default :from => "donotreply@railsforcharity.org"
  layout 'email/email', except: [:contact_us]

  def contact_us(sender)
    @sender = sender

    mail(
      :to => ENV['MAIL_USERNAME'],
      :from => @sender.email,
      :subject => "[RailsforCharity]: Email from " + @sender.name
    )
  end

end
