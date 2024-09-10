module.exports = {
    validUser: {
      username: "validUser",
      password: "ValidPassword123",
    },
    invalidUser: {
      username: "invalidUser",
      password: "WrongPassword123",
    },
    homepage: {
      baseUrl: "https://www.citizensfla.com",
      claimsLinks: {
        contactCitizensFirst: "call-citizens-first",
        reportAClaim: "report-a-claim",
        catastropheClaims: "catastrophe-claims",
        sinkholeClaims: "sinkhole-claims",
        lossInspection: "loss-inspection",
        insuranceFraud: "insurance-fraud",
      },
      searchTerms: {
        validTerm: "insurance",
        invalidTerm: "nonexistentterm",
        commonTerm: "claim",
        fewResultsTerm: "sinkhole claims",
        emptyTerm: "",
      },
    },
  };
  