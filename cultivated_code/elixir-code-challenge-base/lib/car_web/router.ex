defmodule CarWeb.Router do
  use CarWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", CarWeb do
    pipe_through :api
  end

  pipeline :browser do
    plug(:accepts, ["html"])
  end

   scope "/", CarWeb do
    pipe_through :browser
    get "/", DefaultController, :index
  end


  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
