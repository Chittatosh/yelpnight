const initialHtml = `
<nav class="navbar navbar-expand-sm navbar-light bg-light mb-2"><a class="navbar-brand active" aria-current="true" title="Yelpnight" href="/">
  <img src="https://res.cloudinary.com/fbnt/image/upload/c_scale,w_24/v1523968294/yelpnight_yqhrq4.png" alt="" width="24" height="24">Yelpnight</a><a class="btn btn-success btn-outline-success"
    aria-current="true" title="Home" href="/"><i class="fas fa-home"></i></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
  <div
    class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto"><a class="btn btn-info ml-3" aria-current="false" title="Create an Account" href="/createaccount">Create an Account</a><a class="btn btn-primary ml-3" aria-current="false" title="Sign In" href="/signin">Sign In</a></ul>
    </div>
</nav>
<form>
  <div class="form-group row d-flex align-items-center"><label for="yelpSearch" class="col-sm-2 col-form-label">My Location:</label>
    <div class="col-sm-10 input-group"><span class="input-group-prepend"><button type="submit" class="btn btn-secondary"><i class="fas fa-search"></i></button></span><input class="form-control" id="yelpSearch" placeholder="My Location" aria-label="Search for..." value="San Francisco" type="text"></div>
  </div>
</form>
<ul class="list-group">
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media4.fl.yelpcdn.com/bphoto/HLrjaMoAgYSac0vx71YpCA/o.jpg" class="w-25 rounded mr-3" alt="house-of-prime-rib-san-francisco">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">House of Prime Rib</h3>
        <h4><span class="badge badge-primary badge-pill">1</span><span class="h5"> Guest</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">1906 Van Ness Ave, San Francisco, CA 94109</h5><a href="https://www.yelp.com/biz/house-of-prime-rib-san-francisco?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"This is a late review but my boyfriend and I finally tried this restaurant for our 3 year anniversary back in December and we absolutely loved it! I think..."</em> - Karren L.</p>
    </div>
  </li>
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media3.fl.yelpcdn.com/bphoto/cw5y2LSOIE-EVNjKK_d7SQ/o.jpg" class="w-25 rounded mr-3" alt="foreign-cinema-san-francisco">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">Foreign Cinema</h3>
        <h4><span class="badge badge-primary badge-pill">2</span><span class="h5"> Guests</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">2534 Mission St, San Francisco, CA 94110</h5><a href="https://www.yelp.com/biz/foreign-cinema-san-francisco?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"I love the atmosphere at Foreign Cinema. If you can, sit outside, they have heating lamps and play movies in the background on the white wall.We ordered..."</em> - Katherine B.</p>
    </div>
  </li>
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media3.fl.yelpcdn.com/bphoto/A5sqbVpCIMqUdae_TSMkjQ/o.jpg" class="w-25 rounded mr-3" alt="sotto-mare-oysteria-and-seafood-san-francisco">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">Sotto Mare Oysteria &amp; Seafood</h3>
        <h4><span class="badge badge-primary badge-pill">1</span><span class="h5"> Guest</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">552 Green St, San Francisco, CA 94133</h5><a href="https://www.yelp.com/biz/sotto-mare-oysteria-and-seafood-san-francisco?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"Even on a Wednesday night, this place gets busy! We got a dozen West Coast oysters, clam steamers, and seafood linguine. The oysters were super fresh,..."</em> - Ellen C.</p>
    </div>
  </li>
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media1.fl.yelpcdn.com/bphoto/qAdGIt3Gd0eTXwW0WjZamw/o.jpg" class="w-25 rounded mr-3" alt="chapeau-san-francisco">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">Chapeau</h3>
        <h4><span class="badge badge-primary badge-pill">1</span><span class="h5"> Guest</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">126 Clement St, San Francisco, CA 94118</h5><a href="https://www.yelp.com/biz/chapeau-san-francisco?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"Perhaps an epitome of classic French dining, Executive Chef Phillipe Gardelle puts in great care in preparing each of his signature dish. He made time to..."</em> - Trung N.</p>
    </div>
  </li>
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media2.fl.yelpcdn.com/bphoto/d8tM3JkgYW0roXBygLoSKg/o.jpg" class="w-25 rounded mr-3" alt="tonys-pizza-napoletana-san-francisco">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">Tony's Pizza Napoletana</h3>
        <h4><span class="badge badge-primary badge-pill">1</span><span class="h5"> Guest</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">1570 Stockton St, San Francisco, CA 94133</h5><a href="https://www.yelp.com/biz/tonys-pizza-napoletana-san-francisco?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"Arrived at 11:42am on a saturday, they open at 12.  There were about 4 families ahead of us in line, by 11:50 the line was backed up by maybe 20 more..."</em> - Tori G.</p>
    </div>
  </li>
  <li class="d-flex list-group-item" style="max-height: 200px;"><img src="https://s3-media3.fl.yelpcdn.com/bphoto/2Yct9pr8mfNpHE2Zv2qBeg/o.jpg" class="w-25 rounded mr-3" alt="fog-harbor-fish-house-san-francisco-2">
    <div class="flex-column">
      <div class="d-flex w-100 justify-content-between">
        <h3 class="mb-1">Fog Harbor Fish House</h3>
        <h4><span class="badge badge-primary badge-pill">1</span><span class="h5"> Guest</span></h4>
      </div>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">Pier 39, Ste A-202, San Francisco, CA 94133</h5><a href="https://www.yelp.com/biz/fog-harbor-fish-house-san-francisco-2?adjust_creative=G2rNJTqgodPGDJWaMdBZHw&amp;utm_campaign=yelp_api_v3&amp;utm_medium=api_v3_business_search&amp;utm_source=G2rNJTqgodPGDJWaMdBZHw">more on yelp.com</a></div>
      <p><em>"What can I possibly say about this place that hasn't been said! This restaurant will always have a place in my heart because this is where my fiance and I..."</em> - Thoa B.</p>
    </div>
  </li>
</ul>
`;

module.exports = initialHtml;
