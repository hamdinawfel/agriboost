import React, { useState, useEffect } from 'react';

import html2canvas from 'html2canvas';
import jsPdf from "jspdf";

import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//Redux
import { connect } from 'react-redux';
import { getCondidates, getCondidatesCount, logoutUser, accepteCondidate, getAcceptedCondidates, getAcceptedCondidatesCount } from './actions';
const useStyles = makeStyles({
    root:{
       padding:'0 20px'
    },
  table: {
    minWidth: 650,
  },
});



function Dashboard(props) {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [acceptPage, setAcceptPage] = useState(1);
  const [getAccepted, setGetAccepted] = useState(false);

useEffect(() => {
    props.getCondidates(1);
    props.getCondidatesCount();
    props.getAcceptedCondidatesCount();
}, []);
const handleGetCondidates = () => {
    props.getCondidates(page);
    setGetAccepted(false)

}
const handlePage = (page) => {
    props.getCondidates(page);
    setPage(page)
}
const handleAcceptPage = (page) => {
    props.getAcceptedCondidates(page);
    setAcceptPage(page)
}
const handleAccepted = (condidateId,accepted ) => {
    props.accepteCondidate(condidateId, {accepted})
}
const handleGetAcceptedCondidates =  () => {
    props.getAcceptedCondidates(acceptPage)
    setGetAccepted(true)
}
const handleLogout = () => {
    props.logoutUser();
}
const printPDF = () => {
    const domElement = document.getElementById("table");
    html2canvas(domElement, {
      onclone: document => {
        document.getElementById("print").style.visibility = "hidden";
      }
    }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPdf();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save(`${new Date().toISOString()}.pdf`);
    });
  };
  return (
    <div className={classes.root} dir="rtl">
       {!props.admin.loadingCount?
           <div style={{ display:'flex', justifyContent:'space-between', marginTop:10}}>
              <div style={{ display:'flex'}}>
              {!props.admin.loadingCount? <Button variant="contained" color="primary" style={{padding:'10px 40px', margin:'10px', fontSize:16, fontWeight:600}} onClick={handleGetCondidates} > قائمة المسجلين <span style={{marginRight:20}}>{props.admin.count}</span></Button>:null}
              {!props.admin.loadingAcceptedCount? <Button variant="contained" style={{padding:'0px 40px', margin:'10px', background:'#10991e', color:'#fff', fontSize:16, fontWeight:600}} onClick={handleGetAcceptedCondidates}>قائمة المقبولين <span style={{marginRight:20}}>{props.admin.acceptedCount}</span></Button>:null}
              <button id="print" onClick={printPDF}>
                    PRINT
                </button>
              </div>
              <Button variant="contained" style={{padding:'0px 40px', margin:'10px 0', fontSize:16, fontWeight:600}} onClick={handleLogout}>خروج</Button>
            </div>
            :
            null
        }
        {!props.admin.loadingCondidates?
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small"  aria-label="simple table" id="table">
            <TableHead style={{background:'#eee'}}>
            <TableRow>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>الإجراءات</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>التاريخ</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>الإسم و اللقب</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>الهاتف</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>البريد الإلكتروني</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:70}}> رقم ب ت و</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:70}}> رقم البصمة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:80}}>تاريخ الولادة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:50}}>الجنس</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>المعتمدية</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:200}}>العنوان</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>الحالة المدنية</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:100}}>المستوى التعليمي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:120}}>تاريخ آخرمستوى تعليمي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>منتفع بالبرنامج الوطني للعلاج المجاني وذو التعريفة المنخفظة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>أم لإبن مقيم بأحد المراكز المندمجة للشباب و الطفولة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>مكفول سابقا من أحد مراكز الدفاع والإدماج الإجتماعي</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:300}}>متعهد بك سابقا من أحد المراكز المندمجة للشباب و الطفولة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:150}}>أفراد من العائلة في الكفالة</TableCell>
                <TableCell align="right" style={{ fontWeight:600,minWidth:220}}>أبناء أو إخوة على مقاعد الدراسة أو التكوين</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {props.admin.condidates.map((item) => (
                <TableRow key={item._id} >
                <TableCell align="right">
                    {!item.accepted?
                    <Tooltip title="إضافة إلى قائمة المقبولين" placement="left">
                        <IconButton onClick={()=>handleAccepted(item._id, !item.accepted)}>
                            <CheckBoxOutlineBlankIcon />
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="حذف من قائمة المقبولين" placement="left">
                      <IconButton onClick={()=>handleAccepted(item._id, !item.accepted)}>
                        <CheckBoxIcon style={{ color:'#10991e'}}/>
                      </IconButton>
                    </Tooltip>
                }
                </TableCell>
                <TableCell align="right">{item.createdAt.split('T')[0]}</TableCell>
                <TableCell align="right">
                    {item.firstName}{" "}{item.lastName}
                </TableCell>
                <TableCell align="right">
                    {item.phone}
                </TableCell>
                <TableCell align="right">
                    {item.email}
                </TableCell>
                <TableCell align="right">
                    {item.cin}
                </TableCell>
                <TableCell align="right">
                    {item.fingerPrint}
                </TableCell>
                <TableCell align="right">
                    {item.birthDay}
                </TableCell>
                <TableCell align="right">
                    {item.sexe}
                </TableCell>
                <TableCell align="right">
                    {item.village}
                </TableCell>
                <TableCell align="right">
                    {item.address}
                </TableCell>
                <TableCell align="right">
                    {item.civilStatus}
                </TableCell>
                <TableCell align="right">
                    {item.edicationalLevel}
                </TableCell>
                <TableCell align="right">
                    {item.lastStadyLevel}
                </TableCell>
                {item.isBeneficiaryTreatment ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isMotherOfResidingSon ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isPreResidingAtDefenseCenter ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isPreResidingAtCombinedCenter ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isFamilymembersGuarantee ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                {item.isFamilymembersStudent ==='نعم'?<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#10991e'}}>نعم</TableCell>:<TableCell align="center" style={{ fontSize:18, fontWeight:600, color:'#e52816'}}>لا</TableCell>}
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        :
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:200}}>
        <CircularProgress />
        </div>}
        <div>
            {!getAccepted?
            <div style={{ margin:10, display:'flex', justifyContent:'center'}}>
                {!props.admin.loadingCondidates?<span style={{marginLeft:20, verticalAlign:'middle', background:'#3f51b5', borderRadius:5, color:'#fff', fontWeight:600, padding:'5px 20px', float:'left'}}> عدد {props.admin.condidates.length} مسجل/الصفحة</span>:null}
                {!props.admin.loadingCondidates?<Pagination page={page} hideNextButton hidePrevButton onChange={(e, page)=>handlePage(page)} count={Math.floor(props.admin.count/10)+1} color="primary" />:null}
            </div>
            :
            <div style={{ margin:10, display:'flex', justifyContent:'center'}}>
                {!props.admin.loadingCondidates?<span style={{marginLeft:20, verticalAlign:'middle', background:'#10991e', borderRadius:5, color:'#fff', fontWeight:600, padding:'5px 20px', float:'left'}}> عدد {props.admin.condidates.length} مقبول/الصفحة</span>:null}
                {!props.admin.loadingCondidates?<Pagination color='secondary' page={acceptPage} hideNextButton hidePrevButton onChange={(e, acceptPage)=>handleAcceptPage(acceptPage)} count={Math.floor(props.admin.acceptedCount/10)+1} />:null}
            </div>}
            
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    admin: state.admin,
  });
  const mapActionsToProps = {
    getCondidates,
    logoutUser,
    getCondidatesCount,
    getAcceptedCondidatesCount,
    accepteCondidate,
    getAcceptedCondidates
  };
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Dashboard);
