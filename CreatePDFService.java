package com.example.example.service;

;
import com.example.example.config.props.FileStorageProperties;
import com.example.example.dto.invoice.*;
import com.example.example.dto.url.UrlProperties;
import com.example.example.exceptions.FileStorageException;
import com.google.common.hash.HashCode;
import com.google.common.hash.Hashing;
import com.itextpdf.barcodes.BarcodeQRCode;
import com.itextpdf.io.font.FontCache;
import com.itextpdf.io.font.PdfEncodings;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.color.*;
import com.itextpdf.kernel.color.Color;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.SolidLine;
import com.itextpdf.kernel.pdf.xobject.PdfFormXObject;
import com.itextpdf.layout.*;
import com.itextpdf.layout.border.*;
import com.itextpdf.layout.element.*;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.property.*;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.apache.pdfbox.tools.imageio.ImageIOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;


@Service
public class CreatePDFService {

    @Autowired
    ConferenceService conferenceService;

    @Autowired
    InvoiceService invoiceService;

    @Autowired
    UnionService unionService;

    @Autowired
    ResourceLoader resourceLoader;


    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    FileService fileService;

    // private String institution_number;

    public static float font_size = 9f;

    private static final DecimalFormat df = new DecimalFormat("0.00");

    public static float font_size7 = 7f;

    public static float heading_font = 12f;


    PdfFont font;
    PdfFont bold;
    PdfFont italic;

    private PdfFontFactory pdfFontFactory;


    private final Path fileStorageLocation;

    @Autowired
    public CreatePDFService(FileStorageProperties fileStorageProperties) {
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }


    // ==== Generate Database Invoices ====
    public void CreatePDF(Integer invoice_id){

        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");

        Invoicing invoicing = invoiceService.getInvoicing(invoice_id);

        String invoice_date = formatter.format(invoicing.getInvoice_date());
        String due_date = formatter.format(invoicing.getDue_date());
        String institution_number = invoicing.getInstitution_number();
        String description = invoicing.getService_name();
        String institution_name = invoicing.getInstitution_name();
        String kra_invoice_number = invoicing.getKra_invoice_number();
        String current_invoice_time = invoicing.getCurrent_invoice_time();

        System.out.println("Conference Name: "+institution_name);
        String Capitalize = institution_name.toUpperCase();

        try {
            String name = invoice_id.toString();
            String basePathOfClass = getClass()
                    .getProtectionDomain().getCodeSource().getLocation().getFile();
            System.out.println("File Path: "+ basePathOfClass);
            Path targetLocation = this.fileStorageLocation;
            String Specific = targetLocation.toString() + "/invoices/";
            File files = new File(Specific);

            if (!files.exists()){
                files.mkdir();
            }else{
                System.out.println("Directory Already Exists");
            }

            // Path targetLocation = this.fileStorageLocation;
            File file = new File(files,name + ".pdf");
            System.out.println("File Path: "+ file.getPath());
            System.out.println("File Path: "+ file.getAbsolutePath());

            String  myChecksum = DigestUtils
                    .md5Hex(name + ".pdf").toUpperCase();


            System.out.println("MD5 Hash: " + myChecksum);

            UrlProperties properties = new UrlProperties();
            properties.setFile_name(name + ".pdf");
            properties.setFile_digest(myChecksum);
            if(Capitalize.contains("UNION")){
                properties.setInstitution_level("UNION");
                properties.setInstitution_number(institution_number);
            }else if(Capitalize.contains("DIVISION")){
                properties.setInstitution_level("DIVISION");
                properties.setInstitution_number(institution_number + "D");
            }else{
                properties.setInstitution_level("CONFERENCE");
                properties.setInstitution_number(institution_number);
            }
            properties.setInstitution_name(institution_name);
            properties.setPurpose("Invoicing");
            properties.setFolder_name("invoices");
            properties.setStatus("PENDING");
            properties.setServer_url("https://lakeatts.co.ke:8443/Example/files/");

            fileService.saveUrlProperties(properties);

            String downloadURI = fileService.getFileId(name+".pdf").getFile_id().toString();
            System.out.println("Download URI: "+ downloadURI);

            PdfWriter pdfWriter = new PdfWriter(new FileOutputStream(file));
            PdfDocument pdfDocument = new PdfDocument(pdfWriter);
            Document document = new Document(pdfDocument);
            pdfDocument.getDefaultPageSize();

            Resource res = resourceLoader.getResource("classpath:static/images/Logo.png");

            ImageData imageData = null;
            try {
                //imageData = ImageDataFactory.create(ClassLoader.getSystemResource("static/Logo.png").toURI().toURL());
                imageData = ImageDataFactory.create(res.getInputStream().readAllBytes());
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }


            Image image = new Image(imageData);

            Resource REGULAR = resourceLoader.getResource("classpath:fonts/trebuc.ttf");
            Resource BOLD = resourceLoader.getResource("classpath:fonts/Trebuchet MS.ttf");
            Resource ITALIC = resourceLoader.getResource("classpath:fonts/TrebuchetMSItalic.ttf");
            // Font
            try {
                System.out.println("Regular: "+ REGULAR);
                font = PdfFontFactory.createFont(REGULAR.getFile().toString(), PdfEncodings.WINANSI);
                bold = PdfFontFactory.createFont(BOLD.getFile().toString(), PdfEncodings.WINANSI);
                italic = PdfFontFactory.createFont(ITALIC.getFile().toString(), PdfEncodings.WINANSI);
            } catch (IOException e) {
                e.printStackTrace();
            }


            //Create the Table Header

            Table table = new Table(1);
            table.setFont(font);
            table.setFontSize(font_size7);
            WriteTableHeader(table);

            // Customer Information Table
            // float colWidth[] = {80, 300, 100, 80};
            Table customerInfoTable = new Table(1);
            writeTableData(customerInfoTable, institution_number,institution_name,invoice_id);


            // Invoice Info Table
            float itemColWidth6[] = {50,50};
            Table invoiceInfoTable = new Table(itemColWidth6);
            InvoiceHeaderTable(invoiceInfoTable, invoice_id, invoice_date, due_date,institution_number);


            // Invoice Header Table
            /*
            float itemColWidth[] = {140, 140, 140, 140};
            Table itemInfoTable = new Table(itemColWidth);
            InvoiceHeaderTable(itemInfoTable);
            */

            // Invoice Description Table
            float itemColWidth1[] = {320, 50, 90, 100};
            Table itemInfoTable1 = new Table(itemColWidth1);
            InvoiceDescriptionTable(itemInfoTable1, invoice_id,description);

            // Additional Details Table
            float details[] = {340};
            Table itemInfoTable2 = new Table(details);
            AdditionalTableDetails(itemInfoTable2);

            //Table Footer Details

            float itemColWidth3 []= {60, 20, 60, 60};
            Table itemInfoTable4 = new Table(itemColWidth3);
            WriteTableFooter(itemInfoTable4);


            // Additional Information
            float itemColWidth5 []= {560};
            Table itemInfoTable5 = new Table(itemColWidth5);
            WriteMoreInfo(itemInfoTable5);

            // All Right Reserved
            float itemColWidth2[] = {170};
            Table allRights = new Table(itemColWidth2);
            rightDesign(allRights);

            //KRA Invoice Information
            float itemColWidth9[] = {350};
            Table KRA_Table = new Table(itemColWidth9);
            KraInfo(KRA_Table,kra_invoice_number,current_invoice_time);


            document.add(image.scaleAbsolute(220, 35));
            document.add(table);
            document.add(customerInfoTable);
            document.add(invoiceInfoTable);
            document.add(itemInfoTable1);
            document.add(itemInfoTable2);
            document.add(allRights);
            document.add(itemInfoTable4);
            document.add(itemInfoTable5);
            document.add(KRA_Table);

            // Generate QR Code
            /*
            BarcodeQRCode qrCode = new BarcodeQRCode("https://itax.kra.go.ke/KRA-Portal/invoiceChk." +
                    "htm?actionCode=loadPage&invoiceNo="+kra_invoice_number);
            PdfFormXObject barcodeObject = qrCode.createFormXObject(Color.BLACK, pdfDocument);
            Image barCodeImage = new Image(barcodeObject).setWidth(70f).setHeight(70f);
            barCodeImage.setHorizontalAlignment(HorizontalAlignment.CENTER);
            document.add(barCodeImage);*/
            generateQRCode(pdfDocument,document,kra_invoice_number);
            // Close the Document
            document.close();

            // Generated PDF Preview by Converting it to an image
            String extension = "jpg";

            // GenerateImagePDF(path, extension);


            System.out.println("PDF Created!");
        }catch (FileNotFoundException e){
            e.printStackTrace();
        }catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    // ==== Generate Image PDF ====
    public void GenerateImagePDF(String path, String extension) throws IOException {
        String Imagepath = "E:/Developing/Project/Example/src/main/resources/static/images";
        PDDocument document1 = PDDocument.load(new File(path));
        PDFRenderer pdfRenderer = new PDFRenderer(document1);
        for (int page = 0; page < document1.getNumberOfPages(); ++page) {
            BufferedImage bim = pdfRenderer.renderImageWithDPI(
                    page, 300, ImageType.RGB);
            ImageIOUtil.writeImage(
                    bim, String.format(Imagepath+"/Pdf%d.%s", page + 1, extension), 300);
        }
        document1.close();
    }

    // ==== Write Table Data ====
    public void writeTableData(Table customerInfoTable, String institution_number, String institution_name,
                               Integer invoice_id) {

            String conf_lower = institution_name.toLowerCase();
            System.out.println("Org Name:"+ conf_lower);
            int institution_no = Integer.parseInt(institution_number);
            System.out.println("Institution Number Integer: "+ institution_no);

            Border b2 = new SolidBorder(Color.WHITE, 1);

            if (conf_lower.contains("union")) {
                System.out.println("Institution Number: "+institution_number);
                // Integer institution_no = Integer.parseInt(institution_number);

                Union union = unionService.getUnion(Integer.parseInt(institution_number));
                System.out.println("Union Object: "+ union);
                String name = union.getName();
                String physical_address = union.getPhysical_address();
                String box_number = union.getBox_number();
                String email = union.getEmail();
                String phone = union.getPhone_one();

                // if()

                customerInfoTable.addCell(new Cell(0, 1)
                        .add(new Paragraph("INVOICE TO: " + name.toUpperCase()))
                        .setBold()
                        .setFontColor(Color.WHITE)
                        .setFontSize(9)
                        .setFont(font)
                        .setWidthPercent(50)
                        .setBorder(Border.NO_BORDER)
                        .setBackgroundColor(new DeviceRgb(22, 55, 150)));

            /*customerInfoTable.addCell(new Cell()
                    .add(name)
                    .setBorder(Border.NO_BORDER).setFontSize(8));*/
                customerInfoTable.addCell(new Cell()
                        .add("Street: " + physical_address)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mailing: " + box_number)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Email Address: " + email)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mobile: " + phone)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
            }else if(conf_lower.contains("division")){
                String[] split = institution_number.split("_");
                int division_number = Integer.parseInt(split[0]);

                Division division = unionService.getDivision(division_number);
                String name = division.getName();
                String physical_address = division.getPhysicalAddress();
                String box_number = division.getBoxNumber();
                String email = division.getEmail();
                String phone = division.getPhoneOne();


                customerInfoTable.addCell(new Cell(0, 1)
                        .add(new Paragraph("INVOICE TO: " + name.toUpperCase()))
                        .setBold()
                        .setFontColor(Color.WHITE)
                        .setBorder(Border.NO_BORDER)
                        .setFont(font)
                        .setWidthPercent(50)
                        .setFontSize(9)
                        .setBackgroundColor(new DeviceRgb(22, 55, 150)));


                customerInfoTable.addCell(new Cell()
                        .add("Street: " + physical_address)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mailing: " + box_number)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Email Address: " + email)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mobile: " + phone)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
            }else{
                Conference conference = conferenceService.getASpecificConference(institution_number);
                String name = conference.getName();
                String physical_address = conference.getPhysical_address();
                String box_number = conference.getBox_number();
                String email = conference.getEmail();
                String phone = conference.getPhone_one();

                // if()

                customerInfoTable.addCell(new Cell(0, 1)
                        .add(new Paragraph("INVOICE TO: " + name.toUpperCase()))
                        .setBold().setWidthPercent(50)
                        .setFontColor(Color.WHITE)
                        .setFont(font)
                        .setBorder(Border.NO_BORDER)
                        .setFontSize(9)
                        .setBackgroundColor(new DeviceRgb(22, 55, 150)));

            /*customerInfoTable.addCell(new Cell()
                    .add(name)
                    .setBorder(Border.NO_BORDER).setFontSize(8));*/
                customerInfoTable.addCell(new Cell()
                        .add("Street: " + physical_address)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mailing: " + box_number)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Email Address: " + email)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
                customerInfoTable.addCell(new Cell()
                        .add("Mobile: " + phone)
                        .setBorder(Border.NO_BORDER).setFontSize(8));
            }
        }


    // ==== Invoice Header Table ====
    public void InvoiceHeaderTable(Table itemInfoTable, Integer invoice_id,
                                   String invoice_date,String due_date,String institution_number){


        itemInfoTable.setFontSize(8);

        if(institution_number.equals("1_D")) {

            String[] split = institution_number.split("_");
            String conference_no = split[0];

            itemInfoTable.addCell(new Cell(0, 2)
                    .add("INVOICE")
                    .setBold()
                    .setPaddingLeft(10f)
                    .setFontColor(Color.BLACK)
                    .setBorderRight(Border.NO_BORDER)
                    .setBorderLeft(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER)
                    .setTextAlignment(TextAlignment.CENTER));

            itemInfoTable.addCell(new Cell().add("Invoice Number")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER));
            itemInfoTable.addCell(new Cell().add(invoice_id.toString()));
            itemInfoTable.addCell(new Cell().add("Date")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER));
            itemInfoTable.addCell(new Cell().add(invoice_date));
            itemInfoTable.addCell(new Cell().add("Customer ID")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER));
            itemInfoTable.addCell(new Cell().add(conference_no));
            itemInfoTable.addCell(new Cell().add("Due Date")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER));
            itemInfoTable.addCell(new Cell().add(due_date)
                    .setBackgroundColor(new DeviceRgb(230, 230, 255)));
            itemInfoTable.setHorizontalAlignment(HorizontalAlignment.RIGHT);
            itemInfoTable.setFixedPosition(400, 700, 150);
        }else {
            String[] split = institution_number.split("_");
            String conference_no = split[0];

            itemInfoTable.addCell(new Cell(0, 2)
                    .add("INVOICE")
                    .setBold()
                    .setPaddingLeft(10f)
                    .setFontColor(Color.BLACK)
                    .setBorderRight(Border.NO_BORDER)
                    .setBorderLeft(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER)
                    .setTextAlignment(TextAlignment.CENTER));

            itemInfoTable.addCell(new Cell().add("Invoice Number #")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER))
                    .setTextAlignment(TextAlignment.RIGHT);
            itemInfoTable.addCell(new Cell().add(invoice_id.toString())
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable.addCell(new Cell().add("Date")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER)
                    .setTextAlignment(TextAlignment.RIGHT));
            itemInfoTable.addCell(new Cell().add(invoice_date)
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable.addCell(new Cell().add("Customer ID")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER)
                    .setTextAlignment(TextAlignment.RIGHT));
            itemInfoTable.addCell(new Cell().add(institution_number)
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable.addCell(new Cell().add("Due Date")
                    .setFontColor(Color.BLACK)
                    .setBorder(Border.NO_BORDER)
                    .setTextAlignment(TextAlignment.RIGHT));
            itemInfoTable.addCell(new Cell().add(due_date)
                    .setBackgroundColor(new DeviceRgb(230, 230, 255))
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable.setHorizontalAlignment(HorizontalAlignment.RIGHT);
            itemInfoTable.setFixedPosition(400, 700, 150);
        }

    }

    // ==== Company Information Table ====
    public void WriteTableHeader(Table table){
            table.addCell(new Cell().add("Lakeatts Solutions, UG28D, Lake Basin Mall, Kakamega-Kisumu RD, Kisumu")
                    .setTextAlignment(TextAlignment.LEFT)
                    .setVerticalAlignment(VerticalAlignment.MIDDLE)
                    .setBorder(Border.NO_BORDER)
                    .setMarginTop(10f)
                    .setFontSize(8)
                    .setBold());

            table.addCell(new Cell().add("Physical Address: P.O Box 683, Kisumu")
                    .setTextAlignment(TextAlignment.LEFT)
                    .setVerticalAlignment(VerticalAlignment.MIDDLE)
                    .setBorder(Border.NO_BORDER)
                    .setFontSize(8)
                    .setBold());

            table.addCell(new Cell().add("Phone : 0207903881/ 0111051440")
                    .setTextAlignment(TextAlignment.LEFT)
                    .setVerticalAlignment(VerticalAlignment.MIDDLE)
                    .setBorder(Border.NO_BORDER)
                    .setFontSize(8)
                    .setBold());

            table.addCell(new Cell().add("Email: sales@lakeatts.co.ke/austin@lakeatts.co.ke")
                    .setTextAlignment(TextAlignment.LEFT)
                    .setVerticalAlignment(VerticalAlignment.MIDDLE)
                    .setBorder(Border.NO_BORDER)
                    .setFontSize(8)
                    .setBold());

            table.addCell(new Cell().add("Website: www.lakeatts.co.ke")
                    .setTextAlignment(TextAlignment.LEFT)
                    .setVerticalAlignment(VerticalAlignment.MIDDLE)
                    .setBorder(Border.NO_BORDER)
                    .setFontSize(8)
                    .setBold());
        }


        // ==== Invoice Description Table ====
        public void InvoiceDescriptionTable(Table itemInfoTable1, Integer invoice_id,
                                            String description){
            Border b2 = new DoubleBorder(Color.BLACK, 1);

            int sum = 0;

            itemInfoTable1.setFontSize(8);
            itemInfoTable1.setMarginTop(5f);

            Calendar cal = Calendar.getInstance();
            String Month = new SimpleDateFormat("MMMMMMMMMMMMMM").format(cal.getTime());
            String Year = new SimpleDateFormat("YYYY").format(cal.getTime());

            itemInfoTable1.addCell(new Cell().add("Description: "+description)
                    .setBackgroundColor(new DeviceRgb(22, 55, 150))
                    .setBorder(Border.NO_BORDER)
                    .setFontColor(Color.WHITE).setTextAlignment(TextAlignment.LEFT));
            itemInfoTable1.addCell(new Cell().add("Units")
                    .setBackgroundColor(new DeviceRgb(22, 55, 150))
                    .setBorder(Border.NO_BORDER)
                    .setFontColor(Color.WHITE).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add("Unit Price")
                    .setBackgroundColor(new DeviceRgb(22, 55, 150))
                    .setBorder(Border.NO_BORDER)
                    .setFontColor(Color.WHITE).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add("Amount")
                    .setBackgroundColor(new DeviceRgb(22, 55, 150))
                    .setBorder(Border.NO_BORDER)
                    .setFontColor(Color.WHITE).setTextAlignment(TextAlignment.RIGHT));


            getInvoiceInfo(itemInfoTable1, invoice_id);

        }


    // ==== Invoice Items Table ====
    public void getInvoiceInfo(Table itemInfoTable1, Integer invoice_id) {

        String description = "";

        Border b2 = new DoubleBorder(new DeviceRgb(242, 242, 242), 1);

        double sum = 0.00;
        double vat = 0.00;
        double calc_vat = 0.00;
        // double total = 0;

        List<Invoice> invoices =  invoiceService.getInvoiceDetails(invoice_id);
        System.out.println("Invoices: "+invoices);

        for(Invoice invoice : invoices) {
            description = invoice.getDescription();
            itemInfoTable1.addCell(new Cell().
                    add(invoice.getDescription())
                    .setBorderLeft(Border.NO_BORDER)
                    .setBorderRight(Border.NO_BORDER).setTextAlignment(TextAlignment.LEFT));

            itemInfoTable1.addCell(new Cell().add(invoice.getQuantity().toString()).setBorderLeft(Border.NO_BORDER)
                    .setBorderRight(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add(invoice.getRate().toString()).setBorderLeft(Border.NO_BORDER)
                    .setBorderRight(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add(invoice.getTotal_amount().toString()).setBorderLeft(Border.NO_BORDER)
                    .setBorderRight(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT));
            sum += invoice.getTotal_amount();
            if (invoice.getDescription().equals("Transportation")){
                System.out.println("Transport is a Reimbursement");
                vat += 0.0;
            }else{
                vat += invoice.getTotal_amount() * 0.16;
            }
        }

        System.out.println("Calc Vat: "+ df.format(vat));
        /*
        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER).setPadding(10f));
        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER).setPadding(10f));
        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER).setPadding(10f));
        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER).setPadding(10f));
        */


        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER));
        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER));
        itemInfoTable1.addCell(new Cell().add("Taxable").setBorderBottom(Border.NO_BORDER)
                .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
        itemInfoTable1.addCell(new Cell().add(String.valueOf(df.format(sum))).setBorderBottom(Border.NO_BORDER)
                .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT));

        itemInfoTable1.addCell(new Cell().
                add("").setBorder(Border.NO_BORDER));
        itemInfoTable1.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
        itemInfoTable1.addCell(new Cell().add("Tax Rate").setBorderBottom(Border.NO_BORDER)
                .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
        itemInfoTable1.addCell(new Cell().add("16.000%").setBorderBottom(Border.NO_BORDER)
                .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT));



        // if(vat == 0.0) {
            Double Calculated_Vat = sum * 0.16;
            Double Total  = vat + sum;

            itemInfoTable1.addCell(new Cell().
                    add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("Tax Due").setBorderBottom(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add(String.valueOf(df.format(vat))).setBorderBottom(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT));
            itemInfoTable1.addCell(new Cell().
                    add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("Total")
                    .setBorderTop(b2).setBackgroundColor(new DeviceRgb(230, 230, 255))
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add("KES          "+df.format(Total)).setBorderTop(b2)
                    .setBackgroundColor(new DeviceRgb(230, 230, 255)).setTextAlignment(TextAlignment.RIGHT));
        /*}else{
            // Double Calculated_Vat = sum * 0.16;
            Double Total  = vat + sum;
            itemInfoTable1.addCell(new Cell().
                    add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("Tax Due").setBorderBottom(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add(String.valueOf(df.format(vat))).setBorderBottom(Border.NO_BORDER)
                    .setBorderTop(Border.NO_BORDER).setTextAlignment(TextAlignment.RIGHT));
            itemInfoTable1.addCell(new Cell().
                    add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("").setBorder(Border.NO_BORDER));
            itemInfoTable1.addCell(new Cell().add("Total")
                    .setBorderTop(b2).setBackgroundColor(new DeviceRgb(230, 230, 255))
                    .setTextAlignment(TextAlignment.CENTER));
            itemInfoTable1.addCell(new Cell().add("KES          "+df.format(Total)).setBorderTop(b2)
                    .setBackgroundColor(new DeviceRgb(230, 230, 255)).setTextAlignment(TextAlignment.RIGHT));
        }*/
    }


    // ==== Additional Table Details ====
    public void AdditionalTableDetails(Table itemInfoTable2){
            itemInfoTable2.setFontSize(8);
            Border b1 = new SolidBorder(Color.BLACK, 2);
            Border b2 = new DoubleBorder(Color.BLACK, 1);
            itemInfoTable2.setMarginTop(-65f);
            itemInfoTable2.setBorder(b2);
            itemInfoTable2.addCell(new Cell().add("Other Comments")
                    .setBackgroundColor(new DeviceRgb(22, 55, 150))
                    .setBorder(Border.NO_BORDER)
                    .setFontColor(Color.WHITE));
            itemInfoTable2.addCell(new Cell().
                    add("1. Total payment is payable before commencement of work excluding Labor")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable2.addCell(new Cell().
                    add("2. Please include the invoice number on your cheque")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable2.addCell(new Cell().
                    add("3. Bank:Equity Bank. Branch: Oginga Odinga Kisumu")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable2.addCell(new Cell().
                    add("4. Bank A/c Name is Lakeatts Company Limited.Account Number : \n " +
                            "0170284066263")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable2.addCell(new Cell().
                    add("5. M-PESA Paybill 4113681, The Account Number is the Invoice Number")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable2.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));

            itemInfoTable2.setFontSize(8);
            itemInfoTable2.setPaddingBottom(15f);
            itemInfoTable2.setPaddingTop(15f);


        }

        // ==== Right Design Table ====
        public void rightDesign(Table itemInfoTable3){
            Border b1 = new SolidBorder(Color.BLACK, 2);
            Border b2 = new DoubleBorder(Color.BLACK, 1);

            itemInfoTable3.setMarginTop(-60f);
            itemInfoTable3.setFontSize(8);
            itemInfoTable3.addCell(new Cell().
                    add("Make All Cheques payable to \n" +
                            " Lakeatts Co. LTD")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable3.addCell(new Cell().
                    add("THIS INVOICE IS ELECTRONICALLY\n" +
                            "GENERATED AND TRANSMITTED\n" +
                            "NO NEED FOR SIGNATURES OR STAMPS").setBorder(b1));

            itemInfoTable3.setHorizontalAlignment(HorizontalAlignment.RIGHT);
            itemInfoTable3.setFontSize(8);
        }

        // ==== Table Footer ====
        public void WriteTableFooter(Table itemInfoTable4) throws IOException {
            Border b3 = new SolidBorder(Color.BLACK, 1);

            itemInfoTable4.setFontSize(8);
            //Adding Stamp

            // String StampPath = "/opt/tomcat/images/Stamp.png";
            Resource res = resourceLoader.getResource("classpath:static/images/Stamp.png");
            ImageData imageData1 = null;
            try {
                imageData1 = ImageDataFactory.create(res.getInputStream().readAllBytes());
            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
            Image stamp = new Image(imageData1);
            // Load Images


            SolidLine line = new SolidLine(1f);
            line.setColor(Color.BLACK);
            LineSeparator ls = new LineSeparator(line);
            ls.setWidthPercent(100);

            //itemInfoTable4.setMarginTop(-20f);
            itemInfoTable4.addCell(new Cell().add("Prepared By:")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(ls)
                    .setBorder(Border.NO_BORDER)
                    .setMarginTop(10f)
                    .setWidth(60f));
            itemInfoTable4.addCell(new Cell().add("Austin Oyoo:")
                    .setBorder(Border.NO_BORDER).setMarginLeft(5f));
            itemInfoTable4.addCell(new Cell().add(ls)
                    .setBorder(Border.NO_BORDER)
                    .setWidth(60f)
                    .setMarginTop(10f)
                    .setMarginLeft(2f));


            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));


            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));


            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));



            itemInfoTable4.addCell(new Cell().add("Approved By:")
                    .setBorder(Border.NO_BORDER));
            itemInfoTable4.addCell(new Cell().add(ls)
                    .setBorder(Border.NO_BORDER)
                    .setMarginTop(10f)
                    .setWidth(60f));
            itemInfoTable4.addCell(new Cell().add("Signature/Rubber Stamp")
                    .setBorder(Border.NO_BORDER).setMarginLeft(5f));

            itemInfoTable4.addCell(new Cell().add(new Paragraph("\n"))
                    .setBorder(Border.NO_BORDER));




            itemInfoTable4.addCell(new Cell().add(stamp.scaleAbsolute(100, 40))
                    .setMarginLeft(15f)
                    .setBorder(Border.NO_BORDER)
                    .setMarginTop(-60f));


    }


    // ==== Write More Information ====
    public void WriteMoreInfo(Table itemInfoTable5){

        itemInfoTable5.setFontSize(8);
        //itemInfoTable5.setMarginTop(-20f);
        itemInfoTable5.addCell(new Cell().add("If you have any questions about this invoice ," +
                        " please contact Lakeatts Co. LTD, 0207903881/ 0111051440, sales@lakeatts.com")
                .setBorderLeft(Border.NO_BORDER)
                .setBorderRight(Border.NO_BORDER)
                .setBorderBottom(Border.NO_BORDER).setPaddingTop(5f));
        itemInfoTable5.addCell(new Cell().add("Thank you for your Business!")
                .setBorderLeft(Border.NO_BORDER)
                .setBorderRight(Border.NO_BORDER)
                .setBorderTop(Border.NO_BORDER)
                .setHorizontalAlignment(HorizontalAlignment.CENTER));


    }

    // ==== Generate QR Code Table ====
    public void generateQRCode(PdfDocument pdfDocument, Document document, String kra_invoice_number){
        BarcodeQRCode qrCode = new BarcodeQRCode("https://itax.kra.go.ke/KRA-Portal/invoiceChk." +
                "htm?actionCode=loadPage&invoiceNo="+kra_invoice_number);
        PdfFormXObject barcodeObject = qrCode.createFormXObject(Color.BLACK, pdfDocument);
        Image barCodeImage = new Image(barcodeObject).setWidth(70f).setHeight(70f);
        barCodeImage.setHorizontalAlignment(HorizontalAlignment.CENTER);
        document.add(barCodeImage);

    }


    // ==== KRA Information Table ====
    public void KraInfo(Table allRights, String kra_invoice_number, String current_time) {
        allRights.setFontSize(8);
        allRights.setHorizontalAlignment(HorizontalAlignment.CENTER);
        allRights.setMarginLeft(160f);
        //itemInfoTable5.setMarginTop(-20f);
        allRights.addCell(new Cell().add(String.format("Date and Time : %s",current_time))
                .setBold()
                .setBorder(Border.NO_BORDER)
                .setHorizontalAlignment(HorizontalAlignment.CENTER));
        allRights.addCell(new Cell().add(String.format("Control Unit Invoice Number : %s",kra_invoice_number))
                .setBold()
                .setBorder(Border.NO_BORDER)
                .setHorizontalAlignment(HorizontalAlignment.CENTER));


        allRights.addCell(new Cell().add("Control Unit Serial Number : KRAMW009202208096826")
                .setBorder(Border.NO_BORDER)
                .setBold()
                .setHorizontalAlignment(HorizontalAlignment.CENTER));
    }
}
