<template>
  <section>
    <div class="row d-flex justify-content-center align-items-center text-center mt-5">
      <div class="col-md-8">
        <img
          src="../assets/pics/pintbidlogo.svg"
          class="img-fluid"
          alt="Logo PintBid Plaftorm"
        />
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12 col-xl-11 information">
          <h3>How to use the Pint Bid</h3>

          <p>
            <strong>As a non-logged user</strong>, you can see the main auctions on the
            "Home" page and all information about our platform in the "Imprint" and
            "Privacy Statement" sections.
          </p>
          <p>
            <strong>As a registered user</strong>, you can create an auction and sell your
            brewery product. To bid in a Pint Bid Auction, you must be 18 or over and you
            must register to bid via the Pint Bid App. Registration will require the
            submission of certain information about you. You can find the registration
            form in the "Sign Up" section.
          </p>
          <p>
            <strong>Once you have registered</strong>, you will be liable for any bids
            made via your account. Since participating in an auction implies a legal
            contract between buyer and seller, all users must be eligible to enter into a
            legal contract.
          </p>
          <p>
            <strong
              >Bids may only be submitted during the period indicated for bidding
            </strong>
            - that means during the auction is open. You will be notified by email if you
            are outbid or your bid is below another bid already accepted. In the section
            "Profile" you can edit your personal information and see a list of your
            auctions and selling products.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped>
export default {
  name: "HelpView",
};
</script>
<style scoped>
img.img-fluid {
  width: 40%;
}
.information {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
