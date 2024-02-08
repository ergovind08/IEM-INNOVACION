(function ($) {
  $.fn.imgrid = function (options) {
    if (
      navigator.userAgent.indexOf("MSIE") !== -1 ||
      navigator.appVersion.indexOf("Trident/") > 0
    ) {
      $("head").append("<link rel='stylesheet' href='imgrid-ie.css'/>");
    }

    // This is the easiest way to have default options.
    var settings = $.extend(
      {
        lightbox: true,
        showalt: true,
        rightclick: true,
        socialshare: true,
        size: "large",
      },
      options
    );

    var componentUsage = 0;

    // imgrid the collection based on the settings variable.
    return this.each(function () {
      $("" + imgridElement + " > img").hide();
      componentUsage++;
      $(this).addClass("imgrid-" + componentUsage);
      var imgridElement = ".imgrid-" + componentUsage;

      /* IMGRID ~ adobewordpress.com */
      var dataCategory = 0;
      var activeImage = 0;
      var selectedOnes = 0;
      var newImage = 0;
      var animationUsage = 0;
      $("" + imgridElement + "").prepend(
        '<div class="image-selection" imgrid-size="' +
          settings.size +
          '"></div>'
      );

      if (settings.rightclick == false) {
        $(imgridElement).on("contextmenu", function (e) {
          e.preventDefault();
        });
      }

      $("" + imgridElement + " img").each(function () {
        activeImage = $(this);
        $("" + imgridElement + " .image-selection").append(
          '<div class="gallery-item"><img src="' +
            activeImage.attr("src") +
            '" category="' +
            activeImage.attr("category") +
            '" alt="' +
            activeImage.attr("alt") +
            '"></div>'
        );

        $("" + imgridElement + " div.gallery-item").css(
          "height",
          $("" + imgridElement + " div.gallery-item").outerWidth()
        );

        if (settings.lightbox == true) {
          $("" + imgridElement + " .image-selection img").addClass(
            "lightboxImg"
          );
        }
      });

      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        if (settings.showalt == true) {
          $("" + imgridElement + " .gallery-item").on({
            mouseenter: function () {
              activeLabel = $(this);
              $("p.detail-imgrid").css({ top: "100%", opacity: "0" });
              if ($(activeLabel).find(".detail-imgrid").length == 0) {
                $(activeLabel).prepend(
                  '<p class="detail-imgrid"><span>' +
                    $(this).find("img").attr("alt") +
                    "</span></p>"
                );
              }
              setTimeout(function () {
                $(activeLabel)
                  .find(".detail-imgrid")
                  .css({ top: "0", opacity: "1" });
              }, 100);
            },
            mouseleave: function () {
              activeLabel = $(this);
              $(activeLabel)
                .find(".detail-imgrid")
                .css({ top: "100%", opacity: "0" });
            },
          });
        }
      }

      $("" + imgridElement + " > img").remove();
      $("" + imgridElement + "").prepend(
        '<div class="imgrid-header"><select><option>Show All</option></select><span class="result"></span></div>'
      );

      function echoResult() {
        if (
          $("" + imgridElement + " div.image-selection div.gallery-item img")
            .length > 0
        ) {
          $("" + imgridElement + " span.result").html(
            $(
              "" +
                imgridElement +
                " div.image-selection div.gallery-item:not(.offList)"
            ).length + " item(s)"
          );
        } else {
          $("" + imgridElement + " span.result").html("");
        }
      }

      echoResult();

      function selectRefresh() {
        $("" + imgridElement + " select")
          .removeClass("offList")
          .fadeIn();
        $("" + imgridElement + " select").html("<option>Show All</option>");
        $(
          "" +
            imgridElement +
            ' div.image-selection div.gallery-item img[category!="undefined"]'
        ).each(function () {
          dataCategory = $(this).attr("category");

          if (
            $(
              "" +
                imgridElement +
                ' select option:contains("' +
                dataCategory +
                '")'
            ).length == 0
          ) {
            $("" + imgridElement + " select").append(
              "<option>" + dataCategory + "</option>"
            );
          }
        });

        if ($("" + imgridElement + " select option").length == 0) {
          $("" + imgridElement + " select")
            .parent()
            .addClass("offList")
            .fadeOut();
        }
      }

      selectRefresh();

      $("" + imgridElement + " select").on("change", function () {
        $("" + imgridElement + " select option:selected").text();
        if (
          $("" + imgridElement + " select option:selected").text() == "Show All"
        ) {
          $("" + imgridElement + " div.image-selection div.gallery-item img")
            .parent()
            .removeClass("offList")
            .fadeIn();
          $("" + imgridElement + " div.image-selection div.gallery-item img")
            .parent()
            .removeClass("offList")
            .css("display", "inline-block");
        } else {
          $("" + imgridElement + " div.image-selection div.gallery-item img")
            .parent()
            .addClass("offList")
            .hide();
          $(
            "" +
              imgridElement +
              ' div.image-selection div.gallery-item img[category="' +
              $("" + imgridElement + " select option:selected").text() +
              '"]'
          )
            .parent()
            .removeClass("offList")
            .fadeIn();
          $(
            "" +
              imgridElement +
              ' div.image-selection div.gallery-item img[category="' +
              $("" + imgridElement + " select option:selected").text() +
              '"]'
          )
            .parent()
            .removeClass("offList")
            .css("display", "inline-block");
        }
        echoResult();
      });

      /* Gallery Sizes */
      $("" + imgridElement + ' div[imgrid-size="large"] div').addClass("large");
      $("" + imgridElement + ' div[imgrid-size="medium"] div').addClass(
        "medium"
      );
      $("" + imgridElement + ' div[imgrid-size="small"] div').addClass("small");

      /* Disable Dragging an Image */
      $("" + imgridElement + " div.image-selection img").mousedown(function () {
        return false;
      });

      if (settings.lightbox == true) {
        $("" + imgridElement + " div.image-selection .gallery-item").click(
          function () {
            lightboxSelect = $(this).find("img");
            activeImageURL = lightboxSelect.attr("src");
            $("" + imgridElement + " .gallery-item.selected").removeClass(
              "selected"
            );
            lightboxSelect.parent().addClass("selected");

            $("" + imgridElement + " select").blur();

            $("body").prepend(
              '<div class="lightbox-screen-imgrid" style="opacity:0"><div class="lightbox-wrapper-imgrid"><div class="lightbox-detail-imgrid"><span class="close-imgrid">&#10005;</span><img src="' +
                lightboxSelect.attr("src") +
                '"></div></div></div>'
            );
            $(imgridElement).addClass("imgrid-blurred");

            if (settings.rightclick == false) {
              $("" + imgridElement + ",.lightbox-detail-imgrid").on(
                "contextmenu",
                function (e) {
                  e.preventDefault();
                }
              );
            }
            if (animationUsage == 1) {
              $(".lightbox-screen-imgrid").css("opacity", "1");
            } else {
              setTimeout(function () {
                $(".lightbox-screen-imgrid").css("opacity", "1");
              }, 100);
            }

            $(".lightbox-detail-imgrid img").css(
              "max-height",
              $(window).height() - 150
            );

            if (settings.showalt == true) {
              selectedAlt = lightboxSelect.attr("alt");
              if (selectedAlt != "undefined") {
                $(".lightbox-detail-imgrid").append(
                  "<p>" + selectedAlt + "</p>"
                );
              }
            }

            if (
              $("" + imgridElement + " .gallery-item.selected").prev(
                ".gallery-item"
              ).length
            ) {
              $(".lightbox-detail-imgrid").append(
                '<span class="navigate-imgrid left">&#10094;</span>'
              );
            }

            if (
              $("" + imgridElement + " .gallery-item.selected").next(
                ".gallery-item"
              ).length
            ) {
              $(".lightbox-detail-imgrid").append(
                '<span class="navigate-imgrid right">&#10095;</span>'
              );
            }

            if (settings.socialshare == true) {
              $(
                ".lightbox-screen-imgrid .lightbox-wrapper-imgrid .lightbox-detail-imgrid"
              ).css("padding-bottom", "45px");
              var shareURL = window.location.href;

              if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                )
              ) {
                var dataList =
                  '<section class="imgGridSocial mobile" style="' +
                  $(".lightbox-detail-imgrid").width() +
                  '">' +
                  '<a class="pinterest" href="https://pinterest.com/pin/create/link/?url=' +
                  shareURL +
                  "&media=" +
                  activeImageURL +
                  "&description=" +
                  selectedAlt +
                  '"><i class="fa fa-pinterest">&nbsp;</i></a>' +
                  '<a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=' +
                  activeImageURL +
                  '"><i class="fa fa-facebook"></i></a>' +
                  '<a class="twitter" href="https://twitter.com/intent/tweet?text=' +
                  selectedAlt +
                  "&nbsp;" +
                  activeImageURL +
                  '"><i class="fa fa-twitter"></i></a>' +
                  '<a class="whatsapp" href="whatsapp://send?text=' +
                  selectedAlt +
                  "%20" +
                  activeImageURL +
                  '"><i class="fa fa-whatsapp">&nbsp;</i></a>' +
                  '<a class="email" href="mailto:?subject=' +
                  selectedAlt +
                  "&amp;body=" +
                  activeImageURL +
                  '"><i class="fa fa-envelope"></i></a>' +
                  "</section>";
              } else {
                var dataList =
                  '<section class="imgGridSocial" style="' +
                  $(".lightbox-detail-imgrid").width() +
                  '">' +
                  '<a class="pinterest" href="https://pinterest.com/pin/create/link/?url=' +
                  shareURL +
                  "&media=" +
                  activeImageURL +
                  "&description=" +
                  selectedAlt +
                  '"><i class="fa fa-pinterest">&nbsp;</i></a>' +
                  '<a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=' +
                  activeImageURL +
                  '"><i class="fa fa-facebook"></i></a>' +
                  '<a class="twitter" href="https://twitter.com/intent/tweet?text=' +
                  selectedAlt +
                  "&nbsp;" +
                  activeImageURL +
                  '"><i class="fa fa-twitter"></i></a>' +
                  '<a class="email" href="mailto:?subject=' +
                  selectedAlt +
                  "&amp;body=" +
                  activeImageURL +
                  '"><i class="fa fa-envelope"></i></a>' +
                  "</section>";
              }

              $(".lightbox-detail-imgrid").prepend(dataList);
            }
          }
        );

        $(document.body).on(
          "click",
          ".lightbox-screen-imgrid .navigate-imgrid.right",
          function () {
            $(this).parent().parent().parent().remove();
            currentItem = $("" + imgridElement + " .gallery-item.selected");
            nextItem = currentItem.next();
            currentItem.removeClass("selected");
            nextItem.addClass("selected");
            animationUsage = 1;
            nextItem.find("img").click();
            animationUsage = 0;
          }
        );

        $(document.body).on(
          "click",
          ".lightbox-screen-imgrid .navigate-imgrid.left",
          function () {
            $(this).parent().parent().parent().remove();
            currentItem = $("" + imgridElement + " .gallery-item.selected");
            prevItem = currentItem.prev();
            currentItem.removeClass("selected");
            prevItem.addClass("selected");
            animationUsage = 1;
            prevItem.find("img").click();
            animationUsage = 0;
          }
        );

        $(document.body).on(
          "click",
          ".lightbox-screen-imgrid .close-imgrid",
          function () {
            var openedModal = $(this).parent().parent().parent();
            openedModal.css("opacity", "0");
            $(imgridElement).removeClass("imgrid-blurred");
            setTimeout(function () {
              openedModal.remove();
            }, 500);
          }
        );

        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            $(".lightbox-screen-imgrid").css("opacity", "0");
            $(imgridElement).removeClass("imgrid-blurred");
            setTimeout(function () {
              $(".lightbox-screen-imgrid").remove();
            }, 500);
          }
        });

        $(document).keyup(function (e) {
          if (e.keyCode == 39) {
            $(".lightbox-screen-imgrid .navigate-imgrid.right").click();
          }
        });

        $(document).keyup(function (e) {
          if (e.keyCode == 37) {
            $(".lightbox-screen-imgrid .navigate-imgrid.left").click();
          }
        });
      }

      setTimeout(function () {
        $("" + imgridElement + " .gallery-item img").each(function () {
          if ($(this).width() < $(this).height()) {
            $(this).css({ height: "auto", width: "100%" });
          }
        });
      }, 300);

      $("" + imgridElement + " div.gallery-item").css(
        "height",
        $("" + imgridElement + " div.gallery-item").outerWidth()
      );
      $(window).on("resize", function () {
        $(".lightbox-detail-imgrid img").css(
          "max-height",
          $(window).height() - 150
        );
        $("" + imgridElement + " div.gallery-item").css(
          "height",
          $("" + imgridElement + " div.gallery-item").outerWidth()
        );
      });
    });
  };
})(jQuery);

$("#imgrid").imgrid({
  lightbox: true,
  showalt: true,
  rightclick: false,
  socialshare: true,
  size: "large",
});
