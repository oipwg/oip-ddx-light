import React from "react";
import clsx from "clsx";
import * as PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import Article from "./Article";
import {
  TMP_ARTICLE,
  TMP_BASIC,
  TMP_IMAGE,
  TMP_PERSON,
  TMP_TEXT_IS_PREVIEW,
  SIMPCOINSALE,
  SIMPASSETHELD,
  COMMERICAL
} from "../../../../templates";

import styles from "./styles";
import getTemplateData from "../../../../util/template/get-template-data";
import useOip5RecordsByTxid from "../../../hooks/useOip5RecordByTxid";
import useIpfsRecord from "../../../hooks/useIpfsRecord";
import createObjectUrl from "../../../../util/file/create-object-url";
import ExplorerHeader from "../../views/Explorer/ExplorerHeader/ExplorerHeader";

const ArticleViewer = ({
  recordPayload,
  purchasedData,
  className,
  searchInput,
  handleSearchInput,
  style,
}) => {
  const c = styles();

  const { meta } = recordPayload
  // const timeUnix = meta?.time

  console.log(recordPayload)

  const timeUnix = recordPayload?.record?.details?.tmpl_20AD45E7?.date
  let datePublished

  if (timeUnix) {
    datePublished = new Date(timeUnix * 1e3);
  }

  const simpleCoinSaleData = getTemplateData(recordPayload, SIMPCOINSALE);

  // const simpleAssetHeldData = getTemplateData(recordPayload, SIMPASSETHELD);
  
  const commercialTerms = getTemplateData(recordPayload, COMMERICAL);

  const articleTemplateData = getTemplateData(recordPayload, TMP_ARTICLE);
  const basicTemplateData = getTemplateData(recordPayload, TMP_BASIC);
  
  const commercialTermsOptions = commercialTerms.embeddedTerms
  const commercialTermsSCSisTrue = commercialTermsOptions.includes(3733247363)
  const commercialTermsSAHisTrue = commercialTermsOptions.includes(3993842283)

  const title = basicTemplateData?.name;

  const bylineWriterOipRef = articleTemplateData.bylineWriter;
  const imageListOipRef = articleTemplateData.imageList;
  const imageCaptionList = articleTemplateData.imageCaptionList;
  const articleTextOipRef = articleTemplateData.articleText;
  
  const simpleCoinSaleOipRef = (commercialTermsSCSisTrue) ? (simpleCoinSaleData.coin) : (null);

  const [bylineWriterRecord, writerQuery] =
    useOip5RecordsByTxid(bylineWriterOipRef);
  // eslint-disable-next-line no-unused-vars
  const [imageListRecord, imageListQuery] =
    useOip5RecordsByTxid(imageListOipRef);
  // eslint-disable-next-line no-unused-vars
  const [articleTextRecord, articleTextQuery] =
    useOip5RecordsByTxid(articleTextOipRef);

  const [simpleCoinSaleRecord, scsTickerQuery] =
    useOip5RecordsByTxid(simpleCoinSaleOipRef);

  // const simpleCoinSaleTicker = (commercialTermsSCSisTrue) ? (simpleCoinSaleRecord.record.details.tmpl_29F96711.ticker) : (null)
  const simpleCoinSaleQty = (commercialTermsSCSisTrue) ? (recordPayload.record.details.tmpl_DE84D583.amount / recordPayload.record.details.tmpl_DE84D583.scale) : (0)
  const simpleAssetHeldQty = (commercialTermsSAHisTrue) ? (recordPayload.record.details.tmpl_EE0D326B.amount / recordPayload.record.details.tmpl_EE0D326B.scale) : (0)
  
  // const previewTemplate = getTemplateData(articleTextRecord, TMP_TEXT_IS_PREVIEW)
  // const isPreview = previewTemplate?.isPreview || false

  /**
   * Byline caption
   */
   const scsData = getTemplateData(
    simpleCoinSaleRecord,
    SIMPCOINSALE
    )

  const byLineWriterTemplateData = getTemplateData(
    bylineWriterRecord,
    TMP_PERSON
  );
  const byLineWriterFirstName = getTemplateData(bylineWriterRecord, TMP_BASIC);
  const firstName = byLineWriterFirstName?.name;
  const byLineWriter = byLineWriterTemplateData?.surname;

  /**
   * IMAGE
   */
  const imageListTemplateData = getTemplateData(imageListRecord, TMP_IMAGE);
  const imageListIpfsAddress = imageListTemplateData?.imageAddress;
  const [imageBlob, imageListIpfsQuery] = useIpfsRecord(imageListIpfsAddress, {
    responseType: "blob",
  });
  const imageUrl = createObjectUrl({ blob: imageBlob });

  // const imageThumbnailIpfsAddress = imageListTemplateData?.thumbnailAddress
  // const [thumbnailBlob, imageThumbnailIpfsQuery] = useIpfsRecord(imageThumbnailIpfsAddress, 'blob')
  // const thumbnailUrl = createObjectUrl({ blob: imageBlob })

  /**
   * TEXT BODY
   */
  const articleTextTemplateData = getTemplateData(
    articleTextRecord,
    TMP_TEXT_IS_PREVIEW
  );
  const isPreview = articleTextTemplateData?.isPreview && !purchasedData?.paid;

  const articleTextIpfsAddress = articleTextTemplateData?.textAddress;
  const [articleTextIpfsRecord, articleTextIpfsQuery] = useIpfsRecord(
    articleTextIpfsAddress
  );

  const [purchasedText, purchaseTextQuery] = useIpfsRecord(
    purchasedData?.data?.location
  );

  const textLoading =
    purchaseTextQuery.isLoading || articleTextIpfsQuery.isLoading;

  const articleTextDoesNotExists =
    articleTextIpfsQuery?.isSettled && !articleTextIpfsRecord;
  const articleTextLoaded =
    articleTextIpfsQuery.isSettled && articleTextIpfsRecord;

  function showCommercialTerms() {
    let ret_string = 
    // "scs:" + JSON.stringify(commercialTermsSCSisTrue) + ", sah:" + JSON.stringify(commercialTermsSAHisTrue) + 
    "This is a commercial record. To view the full article, "
    ;
    if (commercialTermsSCSisTrue && !commercialTermsSAHisTrue){
      ret_string += "you can send " + simpleCoinSaleQty
       + " FLO to "
       // + " " + simpleCoinSaleTicker + " to "
        + recordPayload.record.details.tmpl_DE84D583.destination + "."

    }
    else if(!commercialTermsSCSisTrue && commercialTermsSAHisTrue){
      ret_string += " show you are currently holding " + simpleAssetHeldQty + " of the " +
        // asset.ticker +
        " Ravencoin assets called " +
        recordPayload.record.details.tmpl_EE0D326B.asset + "."

    }
    else if(commercialTermsSAHisTrue && commercialTermsSCSisTrue){
      ret_string += "you can send " + simpleCoinSaleQty
       + " FLO to "
       // + " " + simpleCoinSaleTicker + " to "
        + recordPayload.record.details.tmpl_DE84D583.destination +
      ". OR, show you are currently holding " + simpleAssetHeldQty + " of the " +
        // asset.ticker +
        " Ravencoin assets called " +
        recordPayload.record.details.tmpl_EE0D326B.asset
    }
    
    else {
      ret_string = "error loading commercial terms";
    }
    return (ret_string)
    
  }
  const displayCommercialTerms = showCommercialTerms();

  return (
    <div className={clsx(className, c.root)} style={style}>
      <Article className={c.article}>
        <ExplorerHeader
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
          style={{ marginTop: "20px" }}
          // selectOption={selectOption}
          // handleSelectOption={handleSelectOption}
          // handleSearchSubmit={handleSearchSubmit}
          // recordsFetching={recordsFetching}
          // templatesFetching={templatesFetching}
        />
        <Article.Header
          title={
            <h1 className={c.title}>{title || "[Title missing in record]"}</h1>
          }
          subtitle={
            <>
              {writerQuery.isLoading && "Loading byline writer..."}
              {writerQuery.isError && (
                <span style={{ color: "red" }}>
                  'Error fetching byline writer...'
                </span>
              )}
              {writerQuery.isSettled && !writerQuery.isError && (
                <span>
                  {firstName} {byLineWriter},{" "}
                  {articleTemplateData.bylineWritersTitle},{" "}
                  {articleTemplateData.bylineWritersLocation} / Published{" "}
                  {datePublished.toUTCString()}
                </span>
              )}
            </>
          }
        />
        <Article.MediaView
          body={
            <>
              {imageListIpfsQuery.isLoading && (
                <div
                  style={{
                    height: 300,
                    width: "100%",
                    backgroundColor: "#b8c6db",
                    backgroundImage:
                      "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
                  }}
                />
              )}
              {imageListIpfsQuery.isSettled && !imageListIpfsQuery.isError && (
                <img alt={"article-image"} src={imageUrl} />
              )}
              {imageListIpfsQuery.isError && (
                <span style={{ color: "red" }}>
                  Error fetching image at location: {imageListIpfsAddress}
                </span>
              )}
            </>
          }
          caption={<span>{imageCaptionList?.join(", ")}</span>}
        ></Article.MediaView>
        <Article.Body>
          {textLoading && "Loading article text..."}
          {articleTextDoesNotExists && (
            <p>
              Failed to load article text at ipfs address:{" "}
              {articleTextIpfsAddress || "unknown"}
              <br />
              Error: {articleTextIpfsQuery.isError}
            </p>
          )}
          {articleTextLoaded && (
            <div
              className={c.body}
              // dangerouslySetInnerHTML={{ __html: purchasedText || articleTextIpfsRecord }}
            >
              <div className={clsx(isPreview && c.preview)} />
              <ReactMarkdown>
                {purchasedText || articleTextIpfsRecord}
              </ReactMarkdown>
            </div>
          )}
        </Article.Body>
        <h3>{displayCommercialTerms}</h3>
      </Article>
    </div>
  );
};

ArticleViewer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ArticleViewer;
